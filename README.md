# Simple Database Migration Tool

This is a simple database migration tool for PostgreSQL databases, designed to help you manage and apply database migrations effortlessly. It reads SQL migration files from a `migrations` folder and applies them to your PostgreSQL database in alphabetical order.

## Getting Started

### Prerequisites

Before you start using this migration tool, make sure you have Node.js installed on your system. You will also need access to a PostgreSQL database.

### Installation

Install the package using npm:

```bash
npm install migrations-fma
```

### Configuration

1. **Set up your database connection:** Modify the `connectionString` in the `migrate.js` file to match your PostgreSQL database credentials:

```javascript
const pool = new Pool({
  connectionString: 'postgres://username:password@localhost/dbname'
});
```

2. **Prepare your migration files:** Place your SQL migration files in a folder named `migrations` located in the same directory as your script. Name your files so they sort alphabetically in the order they should be applied (e.g., `001_initial_setup.sql`, `002_add_users_table.sql`).

### Usage

To run migrations, navigate to the directory containing your migration tool and run:

```bash
node migrate.js
```

The tool will automatically apply all SQL migrations from the `migrations` folder to your database.

## Features

- Simple and lightweight
- Applies migrations in alphabetical order
- Logs out the process and confirms when migrations are applied

## Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

This README provides a basic introduction to the tool, along with instructions on how to install, configure, and use it. Adjust the `<your-package-name>` placeholder with the actual name of your npm package when you publish it.