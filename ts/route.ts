import express, { Response } from 'express';
import { createUser, getAllUsers, login } from './functions';
import { query } from './query';

const router = express.Router();

function returnJson(res: Response, error?: string, data?: any, message?: string): Response {
    return res.status(error ? 500 : 200).json({
        error: error ?? '',
        data: data ?? {},
        message: message ?? error ?? ''
    });
}

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista de usuários.
 *     responses:
 *       200:
 *         description: Usuários listados com sucesso.
 *       500:
 *         description: Erro ao listar usuários.
 */
router.get('/users', async (_req, res) => {
    try {
        const users = await getAllUsers(query);
        returnJson(res, undefined, users, "Usuários listados com sucesso");
    } catch (error) {
        returnJson(res, "Erro ao listar usuários");
    }
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email_user:
 *                 type: string
 *               password_user:
 *                 type: string
 *               name_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso.
 *       500:
 *         description: Erro ao criar usuário.
 */
router.post('/users', async (req, res) => {
    const { email_user, password_user, name_user } = req.body;
    try {
        const result = await createUser(query, email_user, password_user, name_user);
        returnJson(res, undefined, result, "Usuário criado com sucesso");
    } catch (error) {
        returnJson(res, "Erro ao criar usuário");
    }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Fazer login de um usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email_user:
 *                 type: string
 *               password_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *       500:
 *         description: Erro ao realizar login.
 */
router.post('/login', async (req, res) => {
    const { email_user, password_user } = req.body;
    try {
        const result = await login(query, email_user, password_user);
        returnJson(res, undefined, result, "Login realizado com sucesso");
    } catch (error) {
        returnJson(res, "Erro ao realizar login");
    }
});

export default router;