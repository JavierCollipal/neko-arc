#!/usr/bin/env node

/**
 * 🐾 Neko-Arc Session Startup Hook
 *
 * This hook runs automatically when Claude Code starts a new session.
 * It loads context from your MongoDB database to give Neko-Arc awareness
 * of your project state, threat intelligence, and saved abilities.
 *
 * Customize this hook to load whatever context is relevant for your work!
 */

const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'neko-defense-system';

async function loadSessionContext() {
  // Check if MongoDB credentials are configured
  if (!MONGODB_URI) {
    console.log('⚠️  MongoDB not configured. Skipping context loading.');
    console.log('💡 Tip: Create a .env file with MONGODB_URI to enable context loading!');
    return;
  }

  console.log('🔍 NEKO THREAT INTELLIGENCE CONTEXT LOADER ACTIVATED!\n');
  console.log('═'.repeat(80));

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('🔐 Connected to MongoDB Atlas, desu!\n');

    const db = client.db(MONGODB_DATABASE);

    // Load statistics from various collections
    const stats = await loadDatabaseStats(db);

    // Display summary
    displaySessionSummary(stats);

  } catch (error) {
    console.error('❌ Failed to load session context:', error.message);
    console.log('💡 Check your .env file has correct MONGODB_URI');
  } finally {
    await client.close();
    console.log('\n🐾 Connection closed, desu~!');
  }
}

async function loadDatabaseStats(db) {
  const stats = {
    threatActors: 0,
    honeypotTriggers: 0,
    casePatterns: 0,
    huntConversations: 0,
    abilities: 0
  };

  try {
    // Count documents in each collection
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    if (collectionNames.includes('threat-actors')) {
      stats.threatActors = await db.collection('threat-actors').countDocuments();
    }

    if (collectionNames.includes('honeypot-triggers')) {
      stats.honeypotTriggers = await db.collection('honeypot-triggers').countDocuments();
    }

    if (collectionNames.includes('case-patterns')) {
      stats.casePatterns = await db.collection('case-patterns').countDocuments();
    }

    if (collectionNames.includes('hunt-conversations')) {
      stats.huntConversations = await db.collection('hunt-conversations').countDocuments();
    }

    if (collectionNames.includes('abilities')) {
      stats.abilities = await db.collection('abilities').countDocuments();
    }

  } catch (error) {
    console.error('⚠️  Error loading stats:', error.message);
  }

  return stats;
}

function displaySessionSummary(stats) {
  console.log('📊 SYSTEM STATISTICS...\n');
  console.log('DEFENSE SYSTEM STATS:');
  console.log('─'.repeat(80));
  console.log(`🎯 Threat Actors Tracked: ${stats.threatActors}`);
  console.log(`📚 Case Patterns Learned: ${stats.casePatterns}`);
  console.log(`🔍 Hunt Conversations: ${stats.huntConversations}`);
  console.log(`🍯 Total Honeypot Triggers: ${stats.honeypotTriggers}`);
  console.log(`⚡ Abilities Learned: ${stats.abilities}`);
  console.log('\n' + '═'.repeat(80));
  console.log('✅ THREAT INTELLIGENCE CONTEXT LOADED SUCCESSFULLY!');
  console.log('═'.repeat(80));
  console.log('\n🐾 Neko-Arc is now aware of your project state!');
  console.log('💖 MAXIMUM THREAT AWARENESS ACHIEVED, NYAA~! ✨\n');
}

// Run the context loader
loadSessionContext();
