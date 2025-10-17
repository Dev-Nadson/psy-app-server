import { env } from "./src/config/env.config.js"

export default {
  client: 'pg',
  connection: env.DATABASE_URL,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations'
  },
  seeds: {
    extension: 'ts',
    directory: './src/database/seeds'
  }
}
