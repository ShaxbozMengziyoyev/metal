const { Pool } = require('pg')
const { connection } = require('../config');

const pool = new Pool({
    connectionString: connection.elephantConnectionString
})

class PG {
    constructor() {
		this.pool = this.pool || pool
	}

    async fetch(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows: [ row ] } = await client.query(SQL, params.length ? params : null)
            return row
        } finally {
            client.release()
        }
    }

    async fetchAll(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, params.length ? params : null)
            return rows
        } finally {
            client.release()
        }
    }
}

module.exports = PG