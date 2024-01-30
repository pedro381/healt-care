// equipe.js
const express = require('express');
const router = express.Router();
const { Equipe } = require('../models/Estrutura_banco');

// Rota para listar todas as equipes
router.get('/equipes', async (req, res) => {
    try {
        const equipes = await Equipe.findAll();
        res.json(equipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova equipe
router.post('/equipes', async (req, res) => {
    const novaEquipe = req.body;
    try {
        const equipeCriada = await Equipe.create(novaEquipe);
        res.status(201).json(equipeCriada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma equipe pelo nome da equipe
router.put('/equipes/:nomeEquipe', async (req, res) => {
    const nomeEquipe = req.params.nomeEquipe;
    const novosDadosEquipe = req.body;
    try {
        await Equipe.update(novosDadosEquipe, { where: { nomeEquipe } });
        res.send('Equipe atualizada com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir uma equipe pelo nome da equipe
router.delete('/equipes/:nomeEquipe', async (req, res) => {
    const nomeEquipe = req.params.nomeEquipe;
    try {
        await Equipe.destroy({ where: { nomeEquipe } });
        res.send('Equipe excluída com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Equipes
 *   description: Operações relacionadas a equipes.
 */

/**
 * @swagger
 * /equipe/equipes:
 *   get:
 *     summary: Listar todas as equipes.
 *     tags: [Equipes]
 *     responses:
 *       '200':
 *         description: Array de objetos representando todas as equipes.
 *       '500':
 *         description: Objeto de erro se ocorrer um problema no servidor.
 */

/**
 * @swagger
 * /equipe/equipes:
 *   post:
 *     summary: Criar uma nova equipe.
 *     tags: [Equipes]
 *     requestBody:
 *       description: Objeto contendo informações da nova equipe.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       '201':
 *         description: Objeto representando a equipe criada.
 *       '500':
 *         description: Objeto de erro se ocorrer um problema no servidor.
 */

/**
 * @swagger
 * /equipe/equipes/{nomeEquipe}:
 *   put:
 *     summary: Atualizar uma equipe pelo nome da equipe.
 *     tags: [Equipes]
 *     parameters:
 *       - in: path
 *         name: nomeEquipe
 *         required: true
 *         description: Nome da equipe a ser atualizada.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados da equipe.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       '200':
 *         description: Mensagem de sucesso.
 *       '500':
 *         description: Objeto de erro se ocorrer um problema no servidor.
 */

/**
 * @swagger
 * /equipe/equipes/{nomeEquipe}:
 *   delete:
 *     summary: Excluir uma equipe pelo nome da equipe.
 *     tags: [Equipes]
 *     parameters:
 *       - in: path
 *         name: nomeEquipe
 *         required: true
 *         description: Nome da equipe a ser excluída.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Mensagem de sucesso.
 *       '500':
 *         description: Objeto de erro se ocorrer um problema no servidor.
 */
