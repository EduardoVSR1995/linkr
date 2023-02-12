import dotenv from 'dotenv';
import pg from 'pg/lib';

const { Pool } = pg;

dotenv.config();

const connection = new Pool ({
    connectionString: process.env.DATABASE_URL
});
        
export default connection; 
