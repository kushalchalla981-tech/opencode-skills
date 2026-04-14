---
name: skillify
description: "Capture this session's repeatable process into a reusable skill. Analyzes the session, interviews you about preferences, and creates a well-structured SKILL.md file."
when_to_use: "Use at the end of a process you want to capture as a reusable skill. Perfect for documenting workflows, creating automation, and building a library of skills."
argument_hint: "[description of the process you want to capture]"
allowed_tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - AskUserQuestion
  - Bash(mkdir:*)
context: inline
---

# Skillify Skill - Convert Sessions to Reusable Skills

## Overview

The Skillify skill analyzes your current session to identify repeatable processes and converts them into reusable skills. It captures your workflow, preferences, and success criteria into a well-structured SKILL.md file.

## Usage

```bash
/skillify [description of the process you want to capture]
```

### Examples

```bash
# Capture a testing workflow
/skillify capture the end-to-end testing workflow we just used

# Document a deployment process
/skillify the deployment process for staging environment

# Create a skill for code review
/skillify how we reviewed and fixed the authentication bug
```

## How It Works

### Step 1: Analyze the Session

The skill examines your session to identify:

**Process Components:**
- What repeatable process was performed
- What the inputs/parameters were
- The distinct steps (in order)
- Success artifacts/criteria for each step
- Where you corrected or steered the process
- What tools and permissions were needed
- What agents were used
- What the goals and success artifacts were

**Session Context:**
- Session memory summary
- Your messages during the session
- How you steered the process
- Your preferences and corrections

### Step 2: Interview You

The skill uses AskUserQuestion to understand what you want to automate:

**Round 1: High-Level Confirmation**
- Suggests a name and description based on analysis
- Asks you to confirm or rename
- Suggests high-level goals and success criteria

**Round 2: More Details**
- Presents high-level steps as a numbered list
- Suggests arguments based on what was observed
- Asks about execution mode (inline vs forked)
- Asks where to save the skill:
  - **This repo** (`.claude/skills/<name>/SKILL.md`) - Project-specific workflows
  - **Personal** (`~/.claude/skills/<name>/SKILL.md`) - Cross-repo personal workflows

**Round 3: Breaking Down Each Step**
For each major step, the skill asks:
- What does this step produce that later steps need?
- What proves this step succeeded?
- Should the user confirm before proceeding?
- Are any steps independent and could run in parallel?
- How should the skill be executed?
- What are the hard constraints or preferences?

**Round 4: Final Questions**
- Confirms when this skill should be invoked
- Suggests trigger phrases and examples
- Asks about any gotchas or things to watch out for

**Important Notes:**
- Uses AskUserQuestion for ALL questions
- Iterates as much as needed until you're happy
- Always includes a freeform "Other" option for your edits
- Never adds "Needs tweaking" or similar options
- Special attention to places where you corrected the process

### Step 3: Write the SKILL.md

The skill creates the skill directory and file at your chosen location.

**SKILL.md Format:**

```markdown
---
name: {{skill-name}}
description: {{one-line description}}
allowed-tools:
  {{list of tool permission patterns}}
when_to_use: {{detailed description with trigger phrases}}
argument-hint: "{{hint showing argument placeholders}}"
arguments:
  {{list of argument names}}
context: {{inline or fork}}
---

# {{Skill Title}}

Description of skill

## Inputs
- `$arg_name`: Description of this input

## Goal
Clearly stated goal for this workflow

## Steps

### 1. Step Name
What to do in this step

**Success criteria**: ALWAYS include this!

...
```

**Per-Step Annotations:**
- **Success criteria**: REQUIRED on every step
- **Execution**: `Direct` (default), `Task agent`, `Teammate`, or `[human]`
- **Artifacts**: Data this step produces for later steps
- **Human checkpoint**: When to pause and ask for confirmation
- **Rules**: Hard rules for the workflow

**Step Structure Tips:**
- Concurrent steps use sub-numbers: 3a, 3b
- User actions get `[human]` in the title
- Keep simple skills simple - 2-step skills don't need annotations on every step

**Frontmatter Rules:**
- `allowed-tools`: Minimum permissions needed (use patterns like `Bash(gh:*)`)
- `context`: Only set `context: fork` for self-contained skills
- `when_to_use`: CRITICAL - tells the model when to auto-invoke
- `arguments` and `argument-hint`: Only include if the skill takes parameters

### Step 4: Confirm and Save

Before writing the file, the skill:
1. Outputs the complete SKILL.md content as a YAML code block
2. Asks for confirmation using AskUserQuestion
3. Writes the file after confirmation
4. Tells you where it was saved and how to invoke it

## Best Practices

### 1. Capture at the Right Time
```bash
# Good - Capture immediately after completing the process
/skillify the testing workflow we just finished

# Avoid - Capture too early or too late
/skillify the process we started (incomplete)
```

### 2. Be Specific About What to Capture
```bash
# Good - Specific process
/skillify the end-to-end testing workflow for authentication

# Avoid - Too vague
/skillify how we tested things
```

### 3. Include Context
```bash
# Good - Includes description
/skillify the deployment process for staging environment with rollback steps

# Avoid - No context
/skillify deployment
```

## Skill Structure Guidelines

### Simple Skills (2-3 steps)
```markdown
## Steps

### 1. Prepare
Do the preparation work

**Success criteria**: Ready to proceed

### 2. Execute
Do the main work

**Success criteria**: Task completed
```

### Complex Skills (4+ steps)
```markdown
## Steps

### 1. Research
Gather information

**Success criteria**: Have all needed information
**Artifacts**: Research findings, requirements

### 2. Plan
Create a plan

**Success criteria**: Plan is ready
**Artifacts**: Plan document

### 3a. Implement Part A
Implement first part

**Success criteria**: Part A complete

### 3b. Implement Part B
Implement second part (can run in parallel with 3a)

**Success criteria**: Part B complete

### 4. Verify
Test the implementation

**Success criteria**: All tests pass
**Human checkpoint**: Review results before proceeding
```

### Skills with User Interaction
```markdown
## Steps

### 1. [human] Review Requirements
Review and approve requirements

**Success criteria**: Requirements approved

### 2. Implement
Implement based on approved requirements

**Success criteria**: Implementation complete

### 3. [human] Test and Approve
User tests and approves

**Success criteria**: User approved
```

## When to Use Different Execution Modes

### Inline (Default)
Use when:
- The skill needs mid-process user input
- The user wants to steer the process
- The process is interactive
- The skill is part of a larger workflow

**Example:**
```yaml
context: inline
```

### Forked
Use when:
- The skill is self-contained
- No mid-process user input needed
- The task can run autonomously
- The skill is a complete workflow

**Example:**
```yaml
context: fork
```

## Tool Permission Patterns

### Specific Permissions
```yaml
allowed-tools:
  - Bash(git:*)
  - Read
  - Write
  - Edit
```

### Broad Permissions
```yaml
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
```

### Minimal Permissions
```yaml
allowed-tools:
  - Read
  - Glob
```

## Trigger Phrases and Examples

### Good when_to_use Sections
```yaml
when_to_use: |
  Use when the user wants to run end-to-end tests for authentication.
  Examples: 'run auth tests', 'test login flow', 'verify authentication'
```

### Comprehensive Examples
```yaml
when_to_use: |
  Use when the user wants to deploy to staging environment.
  Examples:
  - 'deploy to staging'
  - 'push to staging'
  - 'stage the deployment'
  - 'release to staging environment'
```

## Common Patterns

### Testing Workflow
```markdown
## Steps

### 1. Setup
Prepare test environment

**Success criteria**: Environment ready
**Artifacts**: Test configuration

### 2. Run Tests
Execute test suite

**Success criteria**: All tests pass

### 3. Report
Generate test report

**Success criteria**: Report generated
**Artifacts**: Test results
```

### Deployment Workflow
```markdown
## Steps

### 1. [human] Review Changes
Review and approve changes

**Success criteria**: Changes approved

### 2. Build
Build the application

**Success criteria**: Build successful
**Artifacts**: Build artifacts

### 3. Deploy
Deploy to target environment

**Success criteria**: Deployment complete

### 4. Verify
Verify deployment

**Success criteria**: Application running correctly
**Human checkpoint**: Confirm deployment is working
```

### Code Review Workflow
```markdown
## Steps

### 1. Analyze
Analyze the code changes

**Success criteria**: Changes understood
**Artifacts**: Analysis notes

### 2. Review
Review for issues and improvements

**Success criteria**: Review complete
**Artifacts**: Review findings

### 3. [human] Discuss
Discuss findings with author

**Success criteria**: Consensus reached

### 4. Update
Update code based on feedback

**Success criteria**: Code updated
```

## Troubleshooting

### Skill Not Capturing Correctly
**Issue**: The skill misses important steps or details

**Solution:**
- Be more specific in your description
- Provide more context about the process
- Review the generated skill and edit it manually

### Too Many Questions
**Issue**: The skill asks too many questions

**Solution:**
- Provide a clear, specific description
- The skill will ask fewer questions with more context
- You can always choose "Other" to provide direct input

### Skill Location Confusion
**Issue**: Not sure where to save the skill

**Solution:**
- **This repo**: For workflows specific to this project
- **Personal**: For workflows you use across projects
- The skill will guide you through this choice

## Advanced Usage

### Capturing Multi-Agent Workflows
```bash
/skillify how we used multiple agents to refactor the authentication system
```

### Documenting Error Handling
```bash
/skillify the error handling and recovery process we just implemented
```

### Creating Template Skills
```bash
/skillify create a template skill for API endpoint development
```

## Integration Notes

### Session Memory
The skill uses session memory to understand:
- What happened in the session
- Your preferences and corrections
- The context of the process

### Tool Usage
The skill captures:
- Which tools were used
- How tools were used
- What permissions were needed

### Agent Usage
The skill documents:
- Which agents were spawned
- How agents were configured
- What agents accomplished

## Best Practices Summary

1. **Capture immediately after completing the process**
2. **Be specific about what you're capturing**
3. **Provide context and description**
4. **Answer questions thoughtfully**
5. **Review the generated skill**
6. **Test the skill after creation**
7. **Iterate and improve over time**

## Examples by Use Case

### Development Workflow
```bash
/skillify the feature development workflow from idea to deployment
```

### Testing Workflow
```bash
/skillify the comprehensive testing workflow we used for the payment system
```

### Deployment Workflow
```bash
/skillify the production deployment process with rollback procedures
```

### Debugging Workflow
```bash
/skillify how we diagnosed and fixed the memory leak issue
```

## Related Skills

- **loop**: For recurring task scheduling
- **batch**: For parallel work orchestration
- **remember**: For memory management
- **update-config**: For configuration management

## Skill Quality Checklist

After creating a skill, verify:

- [ ] Clear, descriptive name
- [ ] Concise, accurate description
- [ ] Comprehensive when_to_use section
- [ ] Appropriate tool permissions
- [ ] Correct execution mode
- [ ] Well-structured steps
- [ ] Success criteria for each step
- [ ] Appropriate annotations (execution, artifacts, etc.)
- [ ] Clear argument hints (if applicable)
- [ ] Tested and working

## Iteration and Improvement

### Review and Refine
After using a created skill:
1. Note any issues or missing steps
2. Update the SKILL.md file
3. Test the updated version
4. Continue iterating

### Version Control
Keep skills in version control:
- Track changes over time
- Revert if needed
- Share with team
- Maintain history

### Sharing
Share useful skills:
- Commit to repository
- Document in team wiki
- Present in team meetings
- Gather feedback for improvement
