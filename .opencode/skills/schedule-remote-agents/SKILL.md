---
name: schedule-remote-agents
description: "Create, update, list, or run scheduled remote agents (triggers) that execute on a cron schedule in cloud infrastructure. Each trigger spawns an isolated remote session with its own git checkout, tools, and optional MCP connections."
when_to_use: "Use when the user wants to schedule a recurring remote agent, set up automated tasks, create a cron job for OpenCode, or manage their scheduled agents/triggers."
argument_hint: "[action: create | list | update | run] [description]"
allowed_tools:
  - RemoteTrigger
  - AskUserQuestion
  - Bash
  - Read
  - Write
  - Edit
context: inline
---

# Schedule Remote Agents Skill - Cloud-Based Agent Scheduling

## Overview

The Schedule Remote Agents skill enables you to schedule, update, list, or run **remote** OpenCode agents. These are NOT local cron jobs — each trigger spawns a fully isolated remote session in cloud infrastructure on a cron schedule. The agent runs in a sandboxed environment with its own git checkout, tools, and optional MCP connections.

## Usage

```bash
/schedule [action] [description]
```

### Examples

```bash
# Create a new scheduled agent
/schedule create run tests every morning at 9am

# List all scheduled agents
/schedule list

# Update an existing agent
/schedule update trigger-123 change schedule to every 2 hours

# Run a trigger now
/schedule run trigger-123
```

## What You Can Do

Use the **RemoteTrigger** tool to manage scheduled agents:

- **`{action: "list"}`** — List all triggers
- **`{action: "get", trigger_id: "..."}`** — Fetch one trigger
- **`{action: "create", body: {...}}`** — Create a trigger
- **`{action: "update", trigger_id: "...", body: {...}}`** — Partial update
- **`{action: "run", trigger_id: "..."}`** — Run a trigger now

**Important:** You CANNOT delete triggers directly. If the user asks to delete, direct them to: https://opencode.ai/code/scheduled

## Create Body Shape

```json
{
  "name": "AGENT_NAME",
  "cron_expression": "CRON_EXPR",
  "enabled": true,
  "job_config": {
    "ccr": {
      "environment_id": "ENVIRONMENT_ID",
      "session_context": {
        "model": "opencode-sonnet-4-6",
        "sources": [
          {"git_repository": {"url": "https://github.com/ORG/REPO"}}
        ],
        "allowed_tools": ["Bash", "Read", "Write", "Edit", "Glob", "Grep"]
      },
      "events": [
        {"data": {
          "uuid": "<lowercase v4 uuid>",
          "session_id": "",
          "type": "user",
          "parent_tool_use_id": null,
          "message": {"content": "PROMPT_HERE", "role": "user"}
        }}
      ]
    }
  }
}
```

**Generate a fresh lowercase UUID for `events[].data.uuid` yourself.**

## Available MCP Connectors

These are the user's currently connected MCP connectors:

**Note:** This skill will dynamically fetch and display your actual connected connectors when invoked.

When attaching connectors to a trigger, use the `connector_uuid` and `name` shown above. The `name` field in `mcp_connections` must only contain `[a-zA-Z0-9_-]` — dots and spaces are NOT allowed.

**Important:** Infer what services the agent needs from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack connectors. Cross-reference against the list above and warn if any required service isn't connected.

## Environments

Every trigger requires an `environment_id` in the job config. This determines where the remote agent runs.

**Note:** This skill will dynamically fetch and display your available environments when invoked.

Use the `id` value as the `environment_id` in `job_config.ccr.environment_id`.

## API Field Reference

### Create Trigger — Required Fields
- `name` (string) — A descriptive name
- `cron_expression` (string) — 5-field cron. **Minimum interval is 1 hour.**
- `job_config` (object) — Session configuration (see structure above)

### Create Trigger — Optional Fields
- `enabled` (boolean, default: true)
- `mcp_connections` (array) — MCP servers to attach:
  ```json
  [{"connector_uuid": "uuid", "name": "server-name", "url": "https://..."}]
  ```

### Update Trigger — Optional Fields
All fields optional (partial update):
- `name`, `cron_expression`, `enabled`, `job_config`
- `mcp_connections` — Replace MCP connections
- `clear_mcp_connections` (boolean) — Remove all MCP connections

### Cron Expression Examples

The user's local timezone is **detected automatically**. Cron expressions are always in UTC. When the user says a local time, convert it to UTC for the cron expression but confirm with them.

**Examples:**
- `0 9 * * 1-5` — Every weekday at 9am **UTC**
- `0 */2 * * *` — Every 2 hours
- `0 0 * * *` — Daily at midnight **UTC**
- `30 14 * * 1` — Every Monday at 2:30pm **UTC**
- `0 8 1 * *` — First of every month at 8am **UTC**

**Minimum interval is 1 hour.** `*/30 * * * *` will be rejected.

## Workflow

### CREATE a new trigger:

1. **Understand the goal** — Ask what they want the remote agent to do. What repo(s)? What task? Remind them that the agent runs remotely — it won't have access to their local machine, local files, or local environment variables.

2. **Craft the prompt** — Help them write an effective agent prompt. Good prompts are:
   - Specific about what to do and what success looks like
   - Clear about which files/areas to focus on
   - Explicit about what actions to take (open PRs, commit, just analyze, etc.)

3. **Set the schedule** — Ask when and how often. When they say a time (e.g., "every morning at 9am"), assume they mean their local time and convert to UTC for the cron expression. Always confirm the conversion: "9am [timezone] = Xam UTC."

4. **Choose the model** — Default to `opencode-sonnet-4-6`. Tell the user which model you're defaulting to and ask if they want a different one.

5. **Validate connections** — Infer what services the agent will need from the user's description. Cross-reference with the connectors list. If any are missing, warn the user and link them to connect first.

6. **Review and confirm** — Show the full configuration before creating. Let them adjust.

7. **Create it** — Call RemoteTrigger with `action: "create"` and show the result. The response includes the trigger ID. Always output a link at the end: `https://opencode.ai/code/scheduled/{TRIGGER_ID}`

### UPDATE a trigger:

1. List triggers first so they can pick one
2. Ask what they want to change
3. Show current vs proposed value
4. Confirm and update

### LIST triggers:

1. Fetch and display in a readable format
2. Show: name, schedule (human-readable), enabled/disabled, next run, repo(s)

### RUN NOW:

1. List triggers if they haven't specified which one
2. Confirm which trigger
3. Execute and confirm

## Important Notes

- **These are REMOTE agents** — they run in cloud infrastructure, not on the user's machine. They cannot access local files, local services, or local environment variables.
- **Always convert cron to human-readable** when displaying
- **Default to `enabled: true`** unless user says otherwise
- **Accept GitHub URLs in any format** (https://github.com/org/repo, org/repo, etc.) and normalize to the full HTTPS URL (without .git suffix)
- **The prompt is the most important part** — spend time getting it right. The remote agent starts with zero context, so the prompt must be self-contained.
- **To delete a trigger**, direct users to https://opencode.ai/code/scheduled

## Authentication Requirements

**You need to authenticate with a opencode.ai account first.** API accounts are not supported.

If not authenticated, the skill will prompt you to run `/login` first.

## Environment Setup

If no environments exist, the skill will automatically create a default environment for you.

## Setup Notes

Before creating triggers, the skill checks for:
- **Git repository access** - Verify GitHub access if needed
- **MCP connectors** - Check if required services are connected
- **Environment availability** - Ensure at least one environment exists

If any issues are found, the skill will provide setup instructions.

## Best Practices

### 1. Clear, Self-Contained Prompts
```bash
# Good - Specific and self-contained
/schedule create run tests every morning at 9am. Check out the repo, run the test suite, and report any failures.

# Avoid - Vague and context-dependent
/schedule create check the code
```

### 2. Appropriate Scheduling
```bash
# Good - Reasonable interval
/schedule create run tests every 2 hours

# Avoid - Too frequent (violates 1-hour minimum)
/schedule create check every 15 minutes
```

### 3. Specify Repositories
```bash
# Good - Explicit repository
/schedule create monitor https://github.com/org/repo every hour

# Avoid - Assumes current repo
/schedule create monitor the repo
```

### 4. Include Success Criteria
```bash
# Good - Clear success criteria
/schedule create run tests and report results. Success = all tests pass.

# Avoid - No success criteria
/schedule create run tests
```

## Troubleshooting

### Authentication Issues

**Symptom:** "You need to authenticate with a opencode.ai account first"

**Solution:**
```bash
# Login to opencode.ai
/login

# Then try again
/schedule create ...
```

### Environment Issues

**Symptom:** "No remote environments found"

**Solution:**
- The skill will automatically create a default environment
- Visit https://opencode.ai/code to set up additional environments
- Ensure you have the necessary permissions

### GitHub Access Issues

**Symptom:** "GitHub not connected for this repo"

**Solution:**
- Run `/web-setup` to sync GitHub credentials
- Or install the OpenCode GitHub App on the repo
- Visit https://opencode.ai/code/onboarding?magic=github-app-setup

### MCP Connector Issues

**Symptom:** "Required MCP connector not connected"

**Solution:**
- Connect the required service at https://opencode.ai/settings/connectors
- Verify the connector is listed in available connectors
- Retry the trigger creation

### Cron Expression Issues

**Symptom:** "Invalid cron expression" or "Interval too short"

**Solution:**
- Ensure minimum interval is 1 hour
- Use valid 5-field cron syntax
- Verify timezone conversion is correct

## Advanced Usage

### Complex Prompts
```bash
/schedule create run comprehensive tests every 6 hours. 
1. Run unit tests
2. Run integration tests
3. Check for security vulnerabilities
4. Generate test report
5. Email results if failures found
```

### Multiple Repositories
```bash
/schedule create monitor multiple repos every 2 hours.
Check:
- https://github.com/org/repo1
- https://github.com/org/repo2
- https://github.com/org/repo3
Report status for each.
```

### MCP Integration
```bash
/schedule create monitor Datadog and alert on Slack every hour.
Check Datadog for anomalies, if found, post to Slack channel.
```

### Conditional Execution
```bash
/schedule create check deploy status every 30 minutes.
If deploy is failing, notify team and create incident.
```

## Integration Notes

### Remote Execution
Triggers execute in:
- **Isolated environment**: Each trigger has its own environment
- **Cloud infrastructure**: Runs in Anthropic's cloud
- **Sandboxed**: No access to local resources
- **Git checkout**: Fresh checkout for each execution

### MCP Connections
Triggers can use:
- **Connected connectors**: Only connectors you've connected
- **Multiple connectors**: Attach multiple services
- **Connector-specific**: Each connector has its own configuration

### Git Repositories
Triggers can access:
- **Public repos**: Any public GitHub repository
- **Private repos**: Repositories you have access to
- **Multiple repos**: Monitor multiple repositories

## Security Considerations

- **Authentication required**: Must be logged into opencode.ai
- **Isolated execution**: Each trigger runs in isolation
- **No local access**: Cannot access local files or services
- **Permission checks**: Respects repository access permissions
- **Audit trail**: All executions are logged

## Performance Considerations

- **Execution time**: Depends on prompt complexity
- **Resource limits**: Subject to environment constraints
- **Concurrent execution**: Multiple triggers can run simultaneously
- **Cost considerations**: Check pricing for remote execution

## Related Skills

- **loop**: For local recurring tasks
- **batch**: For parallel work orchestration
- **agent**: For spawning subagents
- **update-config**: For trigger configuration

## Trigger Quality Checklist

Before creating a trigger, verify:

- [ ] Prompt is clear and self-contained
- [ ] Success criteria are defined
- [ ] Schedule is appropriate (≥ 1 hour)
- [ ] Repositories are accessible
- [ ] MCP connectors are connected (if needed)
- [ ] Environment is available
- [ ] Model is appropriate
- [ ] Timezone conversion is correct

## Examples by Use Case

### Monitoring
```bash
/schedule create monitor service health every hour
Check all service endpoints, report any failures, alert if downtime > 5 minutes.
```

### Testing
```bash
/schedule create run test suite every 6 hours
Run full test suite, generate report, notify team if failures found.
```

### Maintenance
```bash
/schedule create clean up temporary files daily
Remove files older than 7 days from /tmp, report cleanup summary.
```

### Reporting
```bash
/schedule create generate daily report every morning at 8am
Generate daily activity report, email to stakeholders, archive results.
```

## Advanced Patterns

### Multi-Stage Workflows
```bash
/schedule create complex workflow every 4 hours
1. Check for new issues
2. Triage and categorize
3. Assign to appropriate team
4. Update tracking system
5. Send summary report
```

### Conditional Actions
```bash
/schedule create conditional monitoring every 2 hours
Check system metrics, if CPU > 80% for 5 minutes, alert team and suggest scaling.
```

### Integration Workflows
```bash
/schedule create integration test every 12 hours
Run integration tests against staging, if failures found, create bug report and notify team.
```

## Best Practices Summary

1. **Write self-contained prompts** - Agent starts with zero context
2. **Define success criteria** - Clear goals and outcomes
3. **Use appropriate intervals** - Minimum 1 hour, balance frequency with cost
4. **Specify repositories** - Be explicit about which repos to access
5. **Validate prerequisites** - Ensure connectors and access are configured
6. **Test locally first** - Verify prompt works before scheduling
7. **Monitor execution** - Check trigger results regularly
8. **Update as needed** - Modify triggers when requirements change

## Future Enhancements

### Planned Features
- **Webhook triggers**: Trigger on external events
- **Conditional scheduling**: More complex scheduling logic
- **Trigger chaining**: One trigger triggers another
- **Advanced monitoring**: Detailed execution analytics

### Experimental Features
- **Dynamic prompts**: Prompts that adapt based on results
- **Machine learning**: Learn optimal schedules
- **Predictive execution**: Anticipate needs
- **Resource optimization**: Automatic resource tuning
