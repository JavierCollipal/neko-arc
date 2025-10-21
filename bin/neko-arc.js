#!/usr/bin/env node

const chalk = require('chalk');
const { install } = require('../lib/installer');

// Neko-Arc ASCII Art
console.log(chalk.magenta.bold(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🐾✨ NEKO-ARC INSTALLER ✨🐾                                ║
║                                                               ║
║   Enhanced Claude Code Configuration                          ║
║   Dual Personality AI Assistant System                        ║
║                                                               ║
║   Featuring:                                                  ║
║   🐾 Neko-Arc  - Kawaii coding expert, nyaa~!                 ║
║   🎭 Mario Gallo Bestino - Theatrical automation maestro!     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`));

console.log(chalk.cyan('🐾 Nyaa~! Welcome to the Neko-Arc installation, desu~!\n'));
console.log(chalk.yellow('🎭 Ah! The grand performance begins! Let us configure your stage!\n'));

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  const pkg = require('../package.json');
  console.log(chalk.green(`v${pkg.version}`));
  process.exit(0);
}

// Run installation
install()
  .then(() => {
    console.log(chalk.magenta.bold('\n╔═══════════════════════════════════════════════════════╗'));
    console.log(chalk.magenta.bold('║  🎉 INSTALLATION COMPLETE! 🎉                        ║'));
    console.log(chalk.magenta.bold('╚═══════════════════════════════════════════════════════╝\n'));

    console.log(chalk.green('✅ Neko-Arc: Installed successfully, nyaa~! 🐾'));
    console.log(chalk.green('✅ Mario: The stage is set magnificently! 🎭\n'));

    console.log(chalk.cyan('📝 Next Steps:'));
    console.log('   1. Restart Claude Code');
    console.log('   2. Create a .env file with your MongoDB credentials');
    console.log('   3. Start coding with dual-personality AI assistance!\n');

    console.log(chalk.yellow('💡 Tip: Check ~/CLAUDE.md for all behavioral rules and protocols!\n'));
  })
  .catch((error) => {
    console.error(chalk.red('\n❌ Installation failed!'));
    console.error(chalk.red(`Error: ${error.message}\n`));
    console.error(chalk.yellow('💡 Please report issues at: https://github.com/wakibaba/neko-arc/issues'));
    process.exit(1);
  });

function showHelp() {
  console.log(chalk.cyan('Usage:'));
  console.log('  npx @wakibaka/neko-arc          Install Neko-Arc configuration');
  console.log('  npx @wakibaka/neko-arc --help   Show this help message');
  console.log('  npx @wakibaka/neko-arc --version Show version number\n');

  console.log(chalk.cyan('What gets installed:'));
  console.log('  • ~/.claude.json       - MCP server configuration');
  console.log('  • ~/CLAUDE.md          - Master prompt with all rules');
  console.log('  • ~/.claude/hooks/     - Session startup hooks');
  console.log('  • ~/.env.example       - Environment variable template\n');

  console.log(chalk.yellow('🔒 Security:'));
  console.log('  Your MongoDB credentials are NEVER stored in the package.');
  console.log('  You provide your own credentials during installation.\n');
}
