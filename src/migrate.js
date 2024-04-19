const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  connectionString: 'postgres://username:password@localhost/dbname'
});

const migrationDirectory = path.join(__dirname, 'migrations');

async function migrate() {
  try {
    const client = await pool.connect();

    const files = fs.readdirSync(migrationDirectory).sort();
    for (const file of files) {
      const filePath = path.join(migrationDirectory, file);
      console.log(`Applying migration from file: ${file}`);
      const query = fs.readFileSync(filePath, 'utf-8');
      await client.query(query);
      console.log(`Migration applied: ${file}`);
    }

    client.release();
    console.log('All migrations have been applied successfully.');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await pool.end();
    process.exit();
  }
}

migrate();
