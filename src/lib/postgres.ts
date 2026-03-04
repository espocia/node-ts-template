import { Pool, Result } from 'pg';

import config from '../config';

class DBClient {
  #client;
  constructor(connectionString: string) {
    this.#client = new Pool({
      connectionString,
      // Max number of connections in the pool
      max: 20,

      // Time to wait for a new connection
      connectionTimeoutMillis: 6000,

      // How long a client is allowed to remain idle before being closed
      idleTimeoutMillis: 30000,

      // Prevent long-lived connections (good for infra changes / proxies)
      maxLifetimeSeconds: 300,

      application_name: 'node-ts-template',
    });
  }

  async rawQuery(query: string, params?: string[]): Promise<Result | unknown> {
    try {
      const res = await this.#client.query(query, params);
      return res.rows;
    } catch (err) {
      console.error('[DATABSE ERROR]: ', err);
      console.log(config.database_config);
      throw err;
    }
  }
}

export default new DBClient(config.database_config);
