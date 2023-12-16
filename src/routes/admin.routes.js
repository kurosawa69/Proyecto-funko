const express = require('express');
const router = express.Router();

const { admin, 
        create, 
        agregar, 
        edit, 
        itemModificación, 
        deleteItem 
    } = require ('../controllers/admin.controller');


router.get('/admin', admin);
router.get('/admin/create', create);
router.post('/admin/create', agregar);
router.get('/admin/edit/:id', edit);
router.put('/admin/edit/:id', itemModificación);
router.delete('/admin/delete/:id', deleteItem);

module.exports = router;