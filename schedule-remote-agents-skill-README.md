# 🌐 Schedule Remote Agents Skill - Cloud-Based Agent Scheduling

<div align="center">

![Schedule Remote Agents Skill](https://img.shields.io/badge/Skill-Schedule%20Remote%20Agents-cyan)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![OpenCode](https://img.shields.io/badge/OpenCode-Compatible-orange)

**Create, update, list, or run scheduled remote agents (triggers) that execute on a cron schedule in cloud infrastructure**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Examples](#-examples) • [Advanced](#-advanced) • [Best Practices](#-best-practices) • [Troubleshooting](#-troubleshooting)

</div>

---

## 🌟 Features

### Core Capabilities

- ⏰ **Cron Scheduling**: Schedule agents using standard cron expressions
- ☁️ **Cloud Execution**: Run agents in isolated cloud environments
- 🔄 **Automatic Triggers**: Execute tasks on precise schedules
- 📊 **Monitoring**: Track agent execution and results
- 🔧 **Dynamic Management**: Create, update, list, and run agents
- 🎯 **Isolated Sessions**: Each trigger spawns an isolated remote session
- 🔌 **MCP Integration**: Optional MCP server connections per agent
- 📈 **Scalability**: Handle multiple concurrent scheduled tasks

### Technical Highlights

- 🚀 **Serverless Architecture**: No infrastructure management required
- 🔒 **Secure Execution**: Isolated environments with proper security
- 📱 **Cross-Platform**: Works across different cloud providers
- 🎨 **Rich Dashboard**: Visual management interface
- 🔍 **Detailed Logging**: Comprehensive execution logs
- 💾 **Persistent Storage**: Agent configurations and results stored
- 🌐 **Global Access**: Execute from anywhere with internet access

---

## 📦 Installation

### Prerequisites

- OpenCode CLI installed
- Cloud account (AWS, GCP, or Azure)
- Basic familiarity with cron expressions
- Git repository initialized
- API credentials configured

### Setup Steps

1. **Navigate to your OpenCode skills directory**
   ```bash
   cd ~/.opencode/skills/
   ```

2. **Create the schedule-remote-agents skill directory**
   ```bash
   mkdir schedule-remote-agents
   cd schedule-remote-agents
   ```

3. **Create the skill file**
   ```bash
   touch SKILL.md
   ```

4. **Add the skill content** (see Usage section below)

5. **Configure cloud credentials**
   ```bash
   # Create credentials file
   mkdir -p ~/.opencode/cloud
   touch ~/.opencode/cloud/credentials.json
   ```

6. **Verify installation**
   ```bash
   # In OpenCode, run:
   /skill schedule-remote-agents
   ```

### Quick Start

```bash
# Create your first scheduled agent
/skill schedule-remote-agents --create daily-build --cron "0 9 * * *" --command "npm run build"

# List all scheduled agents
/skill schedule-remote-agents --list

# Run an agent immediately
/skill schedule-remote-agents --run daily-build

# Update an agent's schedule
/skill schedule-remote-agents --update daily-build --cron "0 18 * * *"
```

---

## 🚀 Usage

### Basic Usage

#### Create a Scheduled Agent

```bash
/skill schedule-remote-agents --create my-agent --cron "0 9 * * *" --command "npm test"
```

Creates a new scheduled agent with:
- **Name**: Unique identifier for the agent
- **Cron**: Schedule expression (runs at 9 AM daily)
- **Command**: Command to execute
- **Environment**: Isolated cloud session
- **Git Checkout**: Fresh repository checkout

#### List All Agents

```bash
/skill schedule-remote-agents --list
```

Displays all scheduled agents:
- Agent names and IDs
- Cron schedules
- Last execution status
- Next execution time
- Execution history

#### Run Agent Immediately

```bash
/skill schedule-remote-agents --run my-agent
```

Executes the agent immediately, bypassing the schedule:
- Creates isolated session
- Executes command
- Returns results
- Logs execution details

#### Delete an Agent

```bash
/skill schedule-remote-agents --delete my-agent
```

Removes the scheduled agent:
- Stops future executions
- Removes configuration
- Archives execution history
- Cleans up resources

### Advanced Usage

#### Update Agent Configuration

```bash
/skill schedule-remote-agents --update my-agent --cron "0 */6 * * *" --command "npm run build && npm test"
```

Update various parameters:
- `--cron` - Change schedule
- `--command` - Update command
- `--timeout` - Set execution timeout
- `--retries` - Configure retry behavior
- `--env` - Add environment variables

#### Complex Cron Schedules

```bash
# Every Monday at 9 AM
/skill schedule-remote-agents --create weekly-report --cron "0 9 * * 1" --command "npm run report"

# Every 6 hours
/skill schedule-remote-agents --create frequent-check --cron "0 */6 * * *" --command "npm run health-check"

# First day of month at midnight
/skill schedule-remote-agents --create monthly-cleanup --cron "0 0 1 * *" --command "npm run cleanup"

# Every weekday at 8 AM and 5 PM
/skill schedule-remote-agents --create work-hours --cron "0 8,17 * * 1-5" --command "npm run sync"
```

#### Environment Variables

```bash
/skill schedule-remote-agents --create deploy-agent --cron "0 18 * * *" --command "npm run deploy" --env NODE_ENV=production,AWS_REGION=us-east-1
```

Set environment variables for agent execution:
- Multiple variables supported
- Secure storage
- Per-agent configuration
- Dynamic values

#### MCP Server Integration

```bash
/skill schedule-remote-agents --create data-agent --cron "0 2 * * *" --command "npm run process-data" --mcp servers/database.json
```

Connect MCP servers to agents:
- Custom MCP configurations
- Server-specific settings
- Resource access control
- Connection management

#### Execution Timeout

```bash
/skill schedule-remote-agents --create long-task --cron "0 3 * * *" --command "npm run heavy-processing" --timeout 3600
```

Set execution time limits:
- Prevent runaway processes
- Resource management
- Cost control
- Automatic termination

#### Retry Configuration

```bash
/skill schedule-remote-agents --create reliable-agent --cron "0 10 * * *" --command "npm run critical-task" --retries 3 --retry-delay 60
```

Configure retry behavior:
- Automatic retry on failure
- Configurable retry count
- Delay between retries
- Exponential backoff option

---

## 📚 Examples

### Example 1: Daily Build and Test

```bash
$ /skill schedule-remote-agents --create daily-build --cron "0 9 * * *" --command "npm run build && npm test"

🌐 Creating scheduled agent...

✅ Agent created successfully!

📋 Agent Details:
   Name: daily-build
   Schedule: 0 9 * * * (Daily at 9:00 AM)
   Command: npm run build && npm test
   Timeout: 1800 seconds
   Retries: 0

⏰ Next execution: Tomorrow at 9:00 AM

🔗 View agent: /skill schedule-remote-agents --show daily-build
```

### Example 2: Weekly Security Scan

```bash
$ /skill schedule-remote-agents --create security-scan --cron "0 2 * * 0" --command "npm run security-audit" --timeout 3600 --retries 2

🌐 Creating scheduled agent...

✅ Agent created successfully!

📋 Agent Details:
   Name: security-scan
   Schedule: 0 2 * * 0 (Weekly on Sunday at 2:00 AM)
   Command: npm run security-audit
   Timeout: 3600 seconds
   Retries: 2

⏰ Next execution: Sunday at 2:00 AM

🔗 View agent: /skill schedule-remote-agents --show security-scan
```

### Example 3: List and Monitor Agents

```bash
$ /skill schedule-remote-agents --list

🌐 Scheduled Agents

📊 Total Agents: 5

1. daily-build
   📅 Schedule: 0 9 * * * (Daily at 9:00 AM)
   ✅ Last Status: Success (2 hours ago)
   ⏰ Next Run: Tomorrow at 9:00 AM
   📈 Success Rate: 95%

2. security-scan
   📅 Schedule: 0 2 * * 0 (Weekly on Sunday at 2:00 AM)
   ✅ Last Status: Success (3 days ago)
   ⏰ Next Run: Sunday at 2:00 AM
   📈 Success Rate: 100%

3. data-sync
   📅 Schedule: */30 * * * * (Every 30 minutes)
   ✅ Last Status: Success (15 minutes ago)
   ⏰ Next Run: In 15 minutes
   📈 Success Rate: 98%

4. deploy-staging
   📅 Schedule: 0 18 * * 1-5 (Weekdays at 6:00 PM)
   ✅ Last Status: Success (1 day ago)
   ⏰ Next Run: Today at 6:00 PM
   📈 Success Rate: 90%

5. backup-database
   📅 Schedule: 0 3 * * * (Daily at 3:00 AM)
   ✅ Last Status: Success (5 hours ago)
   ⏰ Next Run: Tomorrow at 3:00 AM
   📈 Success Rate: 100%
```

### Example 4: Run Agent Immediately

```bash
$ /skill schedule-remote-agents --run daily-build

🌐 Running agent: daily-build

🔄 Creating isolated session...
✅ Session created: session-abc123

📦 Checking out repository...
✅ Repository checked out

🚀 Executing command: npm run build && npm test

📊 Build Progress:
   ████████████████████ 100%

✅ Build completed successfully

📊 Test Progress:
   ████████████████████ 100%

✅ All tests passed

📋 Execution Summary:
   Status: ✅ Success
   Duration: 2 minutes 34 seconds
   Output: 1,234 lines
   Errors: 0

💾 Results saved to: ~/.opencode/agents/daily-build/latest.log
```

### Example 5: Update Agent Configuration

```bash
$ /skill schedule-remote-agents --update daily-build --cron "0 8 * * *" --timeout 2400 --retries 1

🌐 Updating agent: daily-build

✅ Agent updated successfully!

📋 Updated Configuration:
   Name: daily-build
   Schedule: 0 8 * * * (Daily at 8:00 AM) [changed]
   Command: npm run build && npm test
   Timeout: 2400 seconds [changed]
   Retries: 1 [changed]

⏰ Next execution: Tomorrow at 8:00 AM

🔗 View agent: /skill schedule-remote-agents --show daily-build
```

### Example 6: View Agent Details

```bash
$ /skill schedule-remote-agents --show daily-build

🌐 Agent Details: daily-build

📋 Configuration:
   Name: daily-build
   ID: agent-abc123-def456
   Schedule: 0 8 * * * (Daily at 8:00 AM)
   Command: npm run build && npm test
   Timeout: 2400 seconds
   Retries: 1

⏰ Schedule Information:
   Next Run: Tomorrow at 8:00 AM
   Last Run: 2 hours ago
   Total Runs: 45

📊 Performance:
   Success Rate: 95%
   Average Duration: 2m 34s
   Total Execution Time: 1h 55m

📈 Recent Executions:
   1. ✅ Success (2 hours ago) - 2m 34s
   2. ✅ Success (1 day ago) - 2m 28s
   3. ❌ Failed (2 days ago) - Timeout
   4. ✅ Success (3 days ago) - 2m 31s
   5. ✅ Success (4 days ago) - 2m 29s

🔧 Environment Variables:
   NODE_ENV=production
   CI=true

🔌 MCP Servers:
   - database (connected)
   - storage (connected)
```

---

## 🔧 Advanced Usage

### Cron Expression Reference

Standard cron format: `minute hour day month weekday`

```bash
# Examples:
* * * * *           # Every minute
0 * * * *           # Every hour
0 0 * * *           # Daily at midnight
0 9 * * 1-5         # Weekdays at 9 AM
0 */6 * * *         # Every 6 hours
0 0 1 * *           # First day of month
0 0 * * 0           # Every Sunday
0 9,18 * * *        # Daily at 9 AM and 6 PM
*/15 * * * *        # Every 15 minutes
0 9 * * 1           # Every Monday at 9 AM
```

### Agent Isolation

Each agent runs in an isolated environment:

```javascript
{
  "session": {
    "id": "session-unique-id",
    "git": {
      "repository": "current-repo",
      "branch": "main",
      "commit": "latest"
    },
    "environment": {
      "node": "18.x",
      "os": "linux",
      "memory": "2GB",
      "cpu": "2 cores"
    },
    "tools": [
      "bash",
      "file-edit",
      "git"
    ],
    "mcp_servers": []
  }
}
```

### Cloud Provider Configuration

Configure different cloud providers:

```bash
# AWS
/skill schedule-remote-agents --provider aws --region us-east-1

# Google Cloud
/skill schedule-remote-agents --provider gcp --region us-central1

# Azure
/skill schedule-remote-agents --provider azure --region eastus
```

### Cost Optimization

Manage cloud costs effectively:

```bash
# Set cost limits
/skill schedule-remote-agents --cost-limit 100

# Use spot instances
/skill schedule-remote-agents --use-spot

# Configure resource limits
/skill schedule-remote-agents --memory 1GB --cpu 1

# Enable auto-scaling
/skill schedule-remote-agents --auto-scale
```

### Integration with CI/CD

Integrate with existing CI/CD pipelines:

```bash
# Trigger on deployment
/skill schedule-remote-agents --create post-deploy --cron "0 18 * * *" --command "npm run smoke-tests"

# Monitor production
/skill schedule-remote-agents --create prod-monitor --cron "*/5 * * * *" --command "npm run health-check"

# Backup automation
/skill schedule-remote-agents --create backup --cron "0 2 * * *" --command "npm run backup"
```

### Webhook Integration

Configure webhooks for notifications:

```bash
# Add webhook
/skill schedule-remote-agents --webhook https://hooks.slack.com/services/xxx

# Configure webhook events
/skill schedule-remote-agents --webhook-events success,failure

# Custom webhook payload
/skill schedule-remote-agents --webhook-template custom-template.json
```

---

## 🎯 Best Practices

### Design Principles

#### 1. **Scheduling Strategy**
- Choose appropriate frequency
- Consider resource usage
- Plan for peak times
- Allow maintenance windows

#### 2. **Error Handling**
- Implement proper retries
- Set appropriate timeouts
- Monitor failure rates
- Alert on critical failures

#### 3. **Resource Management**
- Optimize execution time
- Use appropriate instance sizes
- Clean up resources
- Monitor costs

#### 4. **Security**
- Use least privilege
- Secure credentials
- Audit access
- Monitor activity

#### 5. **Observability**
- Log comprehensively
- Track metrics
- Monitor performance
- Set up alerts

### Usage Guidelines

#### Scheduling Best Practices

| Use Case | Recommended Schedule | Why |
|----------|---------------------|-----|
| Daily builds | 0 9 * * * | Morning builds, ready for review |
| Tests | 0 */4 * * * | Frequent feedback, quick detection |
| Backups | 0 2 * * * | Low traffic, minimal impact |
| Reports | 0 8 * * 1 | Weekly reports, start of week |
| Cleanup | 0 3 * * 0 | Weekend maintenance |
| Monitoring | */5 * * * * | Real-time awareness |
| Deployments | 0 18 * * 1-5 | End of day, weekdays |
| Security scans | 0 2 * * 0 | Weekend, low impact |

#### Resource Allocation

```bash
# Lightweight tasks
/skill schedule-remote-agents --create light-task --cron "*/10 * * * *" --memory 512MB --cpu 0.5

# Standard tasks
/skill schedule-remote-agents --create standard-task --cron "0 * * * *" --memory 1GB --cpu 1

# Heavy tasks
/skill schedule-remote-agents --create heavy-task --cron "0 2 * * *" --memory 2GB --cpu 2
```

#### Timeout Configuration

```bash
# Quick tasks (< 5 minutes)
/skill schedule-remote-agents --timeout 300

# Standard tasks (5-30 minutes)
/skill schedule-remote-agents --timeout 1800

# Long tasks (30-60 minutes)
/skill schedule-remote-agents --timeout 3600

# Very long tasks (> 1 hour)
/skill schedule-remote-agents --timeout 7200
```

### Performance Optimization

#### Cost Management

```bash
# Monitor costs
/skill schedule-remote-agents --cost-report

# Set budget alerts
/skill schedule-remote-agents --budget-alert 50

# Optimize schedules
/skill schedule-remote-agents --optimize-costs

# Use spot instances
/skill schedule-remote-agents --use-spot
```

#### Execution Optimization

```bash
# Parallel execution
/skill schedule-remote-agents --parallel 5

# Queue management
/skill schedule-remote-agents --queue-size 10

# Result caching
/skill schedule-remote-agents --cache-results

# Incremental builds
/skill schedule-remote-agents --incremental
```

---

## 🛠️ Troubleshooting

### Common Issues

#### Issue: Agent not executing on schedule

**Symptoms:**
- Agent not running at scheduled time
- No execution logs
- Status shows pending

**Solutions:**
```bash
# Check agent status
/skill schedule-remote-agents --status my-agent

# Verify cron expression
/skill schedule-remote-agents --validate-cron "0 9 * * *"

# Check cloud credentials
/skill schedule-remote-agents --check-credentials

# View scheduler logs
/skill schedule-remote-agents --logs scheduler

# Restart scheduler
/skill schedule-remote-agents --restart-scheduler
```

#### Issue: Agent execution failing

**Symptoms:**
- Consistent failures
- Error messages in logs
- No successful executions

**Solutions:**
```bash
# View execution logs
/skill schedule-remote-agents --logs my-agent

# Run agent manually
/skill schedule-remote-agents --run my-agent --debug

# Check command syntax
/skill schedule-remote-agents --validate-command "npm run build"

# Test environment
/skill schedule-remote-agents --test-environment my-agent

# Increase timeout
/skill schedule-remote-agents --update my-agent --timeout 3600
```

#### Issue: High cloud costs

**Symptoms:**
- Unexpected charges
- Resource overuse
- Long execution times

**Solutions:**
```bash
# View cost report
/skill schedule-remote-agents --cost-report

# Analyze resource usage
/skill schedule-remote-agents --analyze-resources

# Optimize schedules
/skill schedule-remote-agents --optimize-schedules

# Reduce resource allocation
/skill schedule-remote-agents --update my-agent --memory 1GB --cpu 1

# Enable cost alerts
/skill schedule-remote-agents --cost-alert 50
```

#### Issue: MCP server connection failures

**Symptoms:**
- MCP connection errors
- Missing server resources
- Integration failures

**Solutions:**
```bash
# Check MCP configuration
/skill schedule-remote-agents --check-mcp my-agent

# Test MCP connection
/skill schedule-remote-agents --test-mcp my-agent

# Update MCP servers
/skill schedule-remote-agents --update my-agent --mcp servers/new-config.json

# Remove MCP integration
/skill schedule-remote-agents --update my-agent --mcp none
```

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
# Enable debug mode
/skill schedule-remote-agents --debug

# View debug logs
/skill schedule-remote-agents --debug-logs

# Export debug report
/skill schedule-remote-agents --debug-report

# Test agent execution
/skill schedule-remote-agents --test my-agent

# Run diagnostics
/skill schedule-remote-agents --diagnose
```

### Getting Help

```bash
# Show help information
/skill schedule-remote-agents --help

# Show examples
/skill schedule-remote-agents --examples

# Show version info
/skill schedule-remote-agents --version

# Report an issue
/skill schedule-remote-agents --report-issue
```

---

## 📖 Additional Resources

### Documentation

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills)
- [Cron Expression Guide](https://opencode.ai/docs/cron)
- [Cloud Integration Guide](https://opencode.ai/docs/cloud)

### Community

- [OpenCode Discord](https://discord.gg/opencode)
- [Remote Agents Forum](https://forum.opencode.ai/remote-agents)
- [Scheduling Showcase](https://showcase.opencode.ai/scheduling)

### Tutorials

- [Advanced Scheduling Patterns](https://tutorial.opencode.ai/advanced-scheduling)
- [Cloud Provider Setup](https://tutorial.opencode.ai/cloud-setup)
- [Cost Optimization Guide](https://tutorial.opencode.ai/cost-optimization)

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
3. **Add your improvements**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation
- Include examples
- Ensure accessibility

### Feature Requests

Have an idea for improving the schedule-remote-agents skill?

- Open an issue on GitHub
- Describe the feature
- Provide use cases
- Include mockups if applicable

---

## 📄 License

This skill is part of the OpenCode project and follows the same license terms.

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

[⬆ Back to Top](#-schedule-remote-agents-skill---cloud-based-agent-scheduling)

</div>