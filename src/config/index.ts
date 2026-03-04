import dotenv from 'dotenv';
dotenv.config();

const database_config: string = process.env.DB_CONNECTION!;

export default { database_config };
