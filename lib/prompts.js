const inquirer = require('inquirer');
const chalk = require('chalk');

/**
 * Get installation configuration from user
 * @returns {Promise<Object>} User's configuration choices
 */
async function getInstallationConfig() {
  console.log(chalk.cyan('🐾 Let me ask you a few questions, nyaa~!\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'mongoUri',
      message: '🗄️  Enter your MongoDB Atlas URI:',
      validate: (input) => {
        if (!input || input.trim() === '') {
          return 'MongoDB URI is required, desu~!';
        }
        if (!input.startsWith('mongodb+srv://') && !input.startsWith('mongodb://')) {
          return 'URI must start with mongodb+srv:// or mongodb://';
        }
        return true;
      },
      default: ''
    },
    {
      type: 'input',
      name: 'dbName',
      message: '📚 Database name:',
      default: 'neko-defense-system',
      validate: (input) => {
        if (!input || input.trim() === '') {
          return 'Database name is required!';
        }
        if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
          return 'Database name can only contain letters, numbers, hyphens, and underscores';
        }
        return true;
      }
    },
    {
      type: 'confirm',
      name: 'backupExisting',
      message: '💾 Backup existing ~/.claude.json if it exists?',
      default: true
    },
    {
      type: 'confirm',
      name: 'installHooks',
      message: '🪝 Install session startup hook (loads threat intelligence)?',
      default: true
    },
    {
      type: 'confirm',
      name: 'installEnvExample',
      message: '📄 Create .env.example template in your home directory?',
      default: true
    }
  ]);

  return answers;
}

/**
 * Confirm before proceeding with installation
 * @param {Object} config - Installation configuration
 * @returns {Promise<boolean>} Whether to proceed
 */
async function confirmInstallation(config) {
  console.log(chalk.yellow('\n🎭 Mario: Let me review your configuration...'));
  console.log(chalk.cyan('\n📋 Installation Summary:'));
  console.log(chalk.white(`   MongoDB URI: ${maskUri(config.mongoUri)}`));
  console.log(chalk.white(`   Database: ${config.dbName}`));
  console.log(chalk.white(`   Backup existing config: ${config.backupExisting ? 'Yes' : 'No'}`));
  console.log(chalk.white(`   Install startup hook: ${config.installHooks ? 'Yes' : 'No'}`));
  console.log(chalk.white(`   Create .env.example: ${config.installEnvExample ? 'Yes' : 'No'}\n`));

  const { proceed } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'proceed',
      message: '🚀 Proceed with installation?',
      default: true
    }
  ]);

  return proceed;
}

/**
 * Mask MongoDB URI for display (hide credentials)
 * @param {string} uri - MongoDB connection URI
 * @returns {string} Masked URI
 */
function maskUri(uri) {
  // Replace credentials with ***
  return uri.replace(/(mongodb\+srv:\/\/|mongodb:\/\/)([^:]+):([^@]+)@/, '$1***:***@');
}

module.exports = {
  getInstallationConfig,
  confirmInstallation,
  maskUri
};
