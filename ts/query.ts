require('dotenv').config();
import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.HOSTBD || 'localhost',
    user: process.env.USERBD || 'user',
    password: process.env.PASSWORDBD || 'root',
    database: process.env.DATABASE || 'database',
    port: parseInt(process.env.PORTBD || '5433', 10)
});

export const query = async (text: string, params?: any[]) => {
    try {
        const client = await pool.connect();
        try {
            const result = await client.query(text, params);
            return result.rows;
        } catch (error) {
            console.log('Erro na query do banco', error);
        } finally {
            client.release();
        };
    } catch (error) {
        console.log('Erro na conexão com o banco:', error);
    };
};