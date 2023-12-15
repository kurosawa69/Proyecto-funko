const express = require('express');
const router = express.Router();


router.get('/admin', (req, res) => res.send('esta es la vista de admin'));
router.get('/admin/create', (req, res) => res.send('esta es la vista de crear un nuevo item'));
router.post('/admin/create', (req, res) => res.send('esta es la ruta para agregar un nuevo item'));
router.get('/admin/edit/:id', (req, res) => res.send('esta es la vista de editar un item'));
router.put('/admin/edit/:id', (req, res) => res.send('esta es la vista para hacer efectiva la modificación de un item'));
router.delete('/admin/delete/:id', (req, res) => res.send('esta es la ruta para borrar un item específico'));

module.exports = router;