const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin.controller');
const adminController = require('../controllers/admin.controller');


router.get('/admin', adminController.admin);
router.get('/admin/create', adminController.create);
router.post('/admin/create', adminController.agregar);
router.get('/admin/edit/:id', adminController.edit);
router.put('/admin/edit/:id', adminController.modificación);
router.delete('/admin/delete/:id', adminController.delete);

module.exports = router;