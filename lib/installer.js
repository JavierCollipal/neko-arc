const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const ora = require('ora');
const { getInstallationConfig, confirmInstallation } = require('./prompts');

/**
 * Main installation function
 */
async function install() {
  try {
    // Get configuration from user
    const config = await getInstallationConfig();

    // Confirm before proceeding
    const proceed = await confirmInstallation(config);
    if (!proceed) {
      console.log(chalk.yellow('\n🐾 Installation cancelled, nyaa~!'));
      return;
    }

    console.log(chalk.magenta('\n🎭 Mario: The performance begins! Installing Neko-Arc...\n'));

    // Run installation steps
    await backupExistingConfig(config);
    await installClaudeConfig(config);
    await installClaudeMd(config);
    await installEnvExample(config);
    await installHooks(config);

    console.log(chalk.green('\n✨ All components installed successfully! ✨\n'));

  } catch (error) {
    console.error(chalk.red(`\n❌ Installation error: ${error.message}`));
    throw error;
  }
}

/**
 * Backup existing ~/.claude.json if requested
 */
async function backupExistingConfig(config) {
  if (!config.backupExisting) return;

  const spinner = ora('Checking for existing configuration...').start();
  const claudeConfigPath = path.join(os.homedir(), '.claude.json');

  if (await fs.pathExists(claudeConfigPath)) {
    const backupPath = `${claudeConfigPath}.backup-${Date.now()}`;
    await fs.copy(claudeConfigPath, backupPath);
    spinner.succeed(chalk.green(`Backed up existing config to ${path.basename(backupPath)}`));
  } else {
    spinner.info('No existing configuration found');
  }
}

/**
 * Install ~/.claude.json with MCP configuration
 */
async function installClaudeConfig(config) {
  const spinner = ora('Installing Claude Code configuration...').start();

  try {
    const templatePath = path.join(__dirname, '../templates/claude-config.json');
    const destPath = path.join(os.homedir(), '.claude.json');

    // Read template
    const template = await fs.readJSON(templatePath);

    // Replace placeholders
    template.mcpServers.mongodb.env.MONGODB_URI = config.mongoUri;
    template.mcpServers.mongodb.env.MONGODB_DATABASE = config.dbName;

    // Write configuration
    await fs.writeJSON(destPath, template, { spaces: 2 });

    spinner.succeed(chalk.green('Installed ~/.claude.json'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to install Claude config'));
    throw error;
  }
}

/**
 * Install ~/CLAUDE.md master prompt
 */
async function installClaudeMd(config) {
  const spinner = ora('Installing CLAUDE.md master prompt...').start();

  try {
    const templatePath = path.join(__dirname, '../templates/CLAUDE.md');
    const destPath = path.join(os.homedir(), 'CLAUDE.md');

    // Copy template
    await fs.copy(templatePath, destPath);

    spinner.succeed(chalk.green('Installed ~/CLAUDE.md (3.11 rules and protocols)'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to install CLAUDE.md'));
    throw error;
  }
}

/**
 * Install .env.example template
 */
async function installEnvExample(config) {
  if (!config.installEnvExample) return;

  const spinner = ora('Creating .env.example template...').start();

  try {
    const templatePath = path.join(__dirname, '../templates/env.example');
    const destPath = path.join(os.homedir(), '.env.example');

    // Copy template
    await fs.copy(templatePath, destPath);

    spinner.succeed(chalk.green('Created ~/.env.example'));
    console.log(chalk.yellow('   💡 Copy this to .env and add your credentials!'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to create .env.example'));
    throw error;
  }
}

/**
 * Install session startup hook
 */
async function installHooks(config) {
  if (!config.installHooks) return;

  const spinner = ora('Installing session startup hook...').start();

  try {
    const hooksDir = path.join(os.homedir(), '.claude', 'hooks');
    await fs.ensureDir(hooksDir);

    const templatePath = path.join(__dirname, '../templates/hooks/session_startup.js');
    const destPath = path.join(hooksDir, 'session_startup.js');

    // Copy hook
    await fs.copy(templatePath, destPath);

    spinner.succeed(chalk.green('Installed ~/.claude/hooks/session_startup.js'));
    console.log(chalk.yellow('   🔍 This hook loads threat intelligence on session start!'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to install startup hook'));
    throw error;
  }
}

module.exports = {
  install
};
