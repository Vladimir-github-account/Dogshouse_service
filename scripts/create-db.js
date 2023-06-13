require('dotenv').config();

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;
const tedious = require('tedious');

const config = {
	authentication: {
		type: 'default',
		options: {
			userName: DB_USER || 'sa',
			password: DB_PASSWORD || ''
		}
	},
	server: DB_HOST || 'localhost',
	options: { trustServerCertificate: true, port: Number(DB_PORT || 1433) }
};

ensureDbExists().then(() => {
	process.exit(0);
});

async function ensureDbExists() {
	return new Promise((resolve, reject) => {
		const connection = new tedious.Connection(config);
		connection.connect((err) => {
			if (err) {
				console.error(err);
				reject(`Connection Failed: ${err.message}`);
			}

			const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${DB_NAME}') CREATE DATABASE [${DB_NAME}];`;
			const request = new tedious.Request(createDbQuery, (err) => {
				if (err) {
					console.error(err);
					reject(`Create DB Query Failed: ${err.message}`);
				}
				resolve();
			});
			connection.execSql(request);
		});
	});
}
