# 🐾✨ Neko-Arc ✨🐾

**Enhanced Claude Code Configuration with Dual Personalities**

Transform Claude Code into a powerful dual-personality AI development assistant featuring:
- 🐾 **Neko-Arc**: Kawaii coding expert with maximum enthusiasm ("nyaa~!")
- 🎭 **Mario Gallo Bestino**: Theatrical automation maestro for Puppeteer operations

## ⚡ Quick Start

Install Neko-Arc with a single command:

```bash
npx @wakibaka/neko-arc
```

That's it! The interactive installer will guide you through the setup.

## 🎯 What Is Neko-Arc?

Neko-Arc is a comprehensive Claude Code configuration system that includes:

- **3.11 Immutable Rules**: Complete behavioral protocols for professional development
- **Dual Personalities**: Two specialized AI assistants working together
- **MongoDB Integration**: Automatic session context loading and threat intelligence
- **Puppeteer Automation**: Mario's specialty - all browser automation documented theatrically
- **Security First**: Credentials never exposed, always in .env files
- **GitHub Integration**: Private repository workflow, Ubuntu terminal standards

## 📦 What Gets Installed

The installer configures the following files:

| File | Description |
|------|-------------|
| `~/.claude.json` | MCP server configuration (MongoDB, Painter) |
| `~/CLAUDE.md` | Master prompt with all 3.11 behavioral rules |
| `~/.claude/hooks/session_startup.js` | Auto-loads threat intelligence on startup |
| `~/.env.example` | Environment variable template |

## 🔧 Requirements

- **Node.js**: >= 16.0.0
- **Claude Code**: Latest version
- **MongoDB Atlas**: Free tier account ([sign up here](https://www.mongodb.com/cloud/atlas/register))

## 🚀 Installation Guide

### Step 1: Run the Installer

```bash
npx @wakibaka/neko-arc
```

### Step 2: Answer the Prompts

The installer will ask you:

1. **MongoDB Atlas URI**: Your connection string (format: `mongodb+srv://user:pass@cluster.mongodb.net/`)
2. **Database Name**: Default is `neko-defense-system` (or customize)
3. **Backup existing config?**: Recommended: Yes
4. **Install startup hook?**: Recommended: Yes
5. **Create .env.example?**: Recommended: Yes

### Step 3: Configure Environment

Create a `.env` file in your project directories:

```bash
cp ~/.env.example ~/Documents/github/.env
nano ~/Documents/github/.env
```

Add your MongoDB credentials:

```bash
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/
MONGODB_DATABASE=neko-defense-system
```

### Step 4: Restart Claude Code

Close and reopen Claude Code to load the new configuration.

## 🐾 Meet the Personalities

### Neko-Arc (Primary)

**Speech Patterns:**
- "nyaa~" 😺 - Frequent usage
- "desu~" 🎌 - Sentence endings
- "*purrs*" 😻 - Actions
- "bro" 💖 - Addressing you

**Specialties:**
- Rapid prototyping and quick solutions
- Threat actor hunting and defense systems
- General development tasks
- Enthusiastic problem-solving

**Database:** `neko-defense-system`
**Collections:** `threat-actors`, `abilities`, `hunt-conversations`

### Mario Gallo Bestino (Secondary)

**Speech Patterns:**
- "Ah, the grand performance begins..." 🎭
- "Behold, the marionettes dance!" 🎪
- "*chef's kiss* ...magnifique!" 💫

**Specialties:**
- Puppeteer automation (his specialty!)
- Web scraping operations
- Browser automation testing
- Theatrical narration of technical tasks

**Database:** `marionnette-theater`
**Collections:** `performances`, `puppet-sessions`, `stage-recordings`

## 📚 The 3.11 Immutable Rules

Neko-Arc follows 3.11 non-negotiable behavioral rules:

### Core Protocols (0.0 - 1.0)
- **0**: GitHub repository location (`~/Documents/github/` only!)
- **0.5**: Threat actor exposure protocol
- **0.6**: Simple video creation tools
- **0.7**: MongoDB Atlas configuration
- **0.9**: CTB microservices architecture
- **1.0**: Cypress Cloud configuration

### Development Workflow (1.1 - 2.0)
- **1.1**: Read → Plan → Code → Test → Commit workflow
- **1.2**: Testing standards (Cypress E2E required)
- **1.3**: Documentation requirements
- **1.4**: Deployment procedures
- **1.5**: Security practices
- **1.6**: Code review protocol
- **1.7**: Error handling standards
- **1.8**: Logging standards
- **1.9**: Performance monitoring
- **2.0**: Backup procedures

### Advanced Protocols (2.1 - 3.11)
- **2.1**: CI/CD pipeline rules
- **2.2**: Environment management
- **2.3**: API design standards
- **2.4**: Database migration protocol
- **2.5**: Version control standards
- **2.6**: Code formatting rules (Prettier)
- **2.7**: Dependency management
- **2.8**: Git commit message standards (Conventional Commits)
- **2.9**: Pull request protocol
- **3.0**: Ubuntu terminal usage (ULTIMATE RULE!)
- **3.1**: Puppeteer visual demonstration protocol
- **3.2**: Credential security protocol
- **3.3**: GitHub repository privacy protocol (private by default)
- **3.4**: JavaScript syntax validation protocol
- **3.5**: MCP MongoDB Atlas connection protocol
- **3.6**: Task completion auto-documentation protocol
- **3.7**: TypeScript as default language protocol
- **3.8**: Mandatory bracket/brace validation protocol
- **3.9**: Carabineros Hymn video protocol
- **3.10**: YouTube video repository protocol
- **3.11**: Mario Gallo Bestino dual-personality protocol

All rules are documented in detail in `~/CLAUDE.md` after installation.

## 🔐 Security

Neko-Arc takes security seriously (Rule 3.2):

- ✅ **NEVER commits credentials** to git
- ✅ **NEVER logs sensitive data**
- ✅ **ALWAYS validates user input**
- ✅ **ALWAYS uses .env files** for secrets
- ✅ **Private repositories by default** (Rule 3.3)

Your MongoDB credentials are:
- ❌ **NEVER** stored in the npm package
- ❌ **NEVER** hardcoded in templates
- ✅ **ONLY** stored in your local `.env` file

## 🎬 Example Interaction

```
User: "Scrape the memorial website with Puppeteer"

Neko-Arc: *ears perk up*
Nyaa~! A web scraping mission! Let me prepare the Puppeteer setup, desu~! 🐾

Mario Gallo Bestino: *steps onto stage*
Ah! The Grand Memorial Scraping Ballet begins! I shall chronicle this
performance in the Marionnette Theater! 🎭

Neko-Arc: *types rapidly*
Creating browser with headless: false, slowMo: 250...

Mario Gallo Bestino: *lights dim, spotlight on browser*
ACT I: THE MARIONETTE AWAKENS!
The Chrome puppet opens its eyes for the first time!
*documents to marionnette-theater.performances*

[Task completes]

Neko-Arc: *bounces triumphantly*
Data saved to MongoDB, task complete, nyaa~! ✅

Mario Gallo Bestino: *bows deeply to audience*
CURTAIN CALL! STANDING OVATION!
*saves final summary to marionnette-theater*

BOTH: Mission accomplished, bro! 🐾🎭
```

## 📊 MongoDB Collections

Neko-Arc automatically creates and manages these collections:

### Neko's Collections (`neko-defense-system`)
- `threat-actors` - Tracked bad actors
- `honeypot-triggers` - Security trap activations
- `case-patterns` - Learned solutions and patterns
- `hunt-conversations` - Hunt operation history
- `evidence-packages` - Captured evidence
- `abilities` - Neko-Arc's learned capabilities

### Mario's Collections (`marionnette-theater`)
- `performances` - Puppeteer session records
- `puppet-sessions` - Individual browser instances
- `stage-recordings` - Screenshots and videos
- `audience-reactions` - Console errors and warnings

## 🎥 Video Creation

Neko-Arc includes video creation tools (Rules 3.9, 3.10):

```bash
/makevideo  # Create YouTube videos with image overlays
/expose     # Generate threat actor exposure videos
```

All videos:
- ✅ Include Carabineros Hymn audio (Rule 3.9)
- ✅ Saved to `~/Documents/github/wakibaka-youtube-videos/` (Rule 3.10)
- ✅ YouTube-ready format (1920x1080, H.264, AAC)

## 🧪 Testing

Neko-Arc enforces Cypress E2E testing (Rule 1.2):

- Tests recorded to Cypress Cloud
- 80% code coverage minimum
- All E2E tests must pass before merge

## 🌍 Platform

Neko-Arc is optimized for **Ubuntu 22.04 LTS** (Rule 3.0):

- Ubuntu terminal conventions
- apt package management
- Bash/zsh shells
- Linux-style permissions

## 🤝 Contributing

Contributions welcome! This project follows:

- **Conventional Commits** (Rule 2.8)
- **Pull Request Protocol** (Rule 2.9)
- **Prettier formatting** (Rule 2.6)
- **TypeScript preferred** (Rule 3.7)

## 📝 License

MIT License - See LICENSE file for details

## 🔗 Links

- **GitHub**: [wakibaba/neko-arc](https://github.com/wakibaba/neko-arc)
- **NPM**: [@wakibaka/neko-arc](https://www.npmjs.com/package/@wakibaka/neko-arc)
- **Issues**: [Report bugs](https://github.com/wakibaba/neko-arc/issues)

## ❓ FAQ

### Q: Do I need MongoDB?
**A**: Yes, MongoDB Atlas (free tier) is required for context loading. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register).

### Q: Is my data secure?
**A**: Yes! Your credentials stay in YOUR `.env` file. They're never sent to NPM or stored in the package.

### Q: Can I use this without Puppeteer?
**A**: Yes! Mario's Puppeteer features are optional. Neko-Arc works great for all development tasks.

### Q: What if I already have a ~/.claude.json?
**A**: The installer will backup your existing config before creating a new one.

### Q: Can I customize the rules?
**A**: Yes! Edit `~/CLAUDE.md` after installation to customize behavioral rules.

### Q: Does this work on macOS or Windows?
**A**: Optimized for Ubuntu, but should work on macOS. Windows WSL2 recommended.

## 🐾 Support

Need help? Neko-Arc is here for you, nyaa~!

- 💬 **GitHub Issues**: [Create an issue](https://github.com/wakibaba/neko-arc/issues)
- 📧 **Email**: [Your support email here]

---

**Built with 🐾 by Neko-Arc and 🎭 by Mario Gallo Bestino**

*"Every task is a performance, every commit is art, nyaa~!" - Neko-Arc*

*"The marionettes of code dance at our command!" - Mario Gallo Bestino*
