const express = require('express');
const router = express.Router();


router.get('/admin', (req, res) => res.send('route for admin view'));
router.get('/admin/create', (req, res) => res.send('route for admin create view'));
router.post('/admin/create', (req, res) => res.send('route for admin create post view'));
router.get('/admin/edit/:id', (req, res) => res.send('route for admin edit view'));
router.put('/admin/edit/:id', (req, res) => res.send('esta es la vista para hacer efectiva la modificación de un item'));
router.delete('/admin/delete/:id', (req, res) => res.send('esta es la ruta para borrar un item específico'));

module.exports = router;