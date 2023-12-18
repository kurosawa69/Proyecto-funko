const path= require ('path');
module.exports = {

    admin: (req, res) => res.render (path.resolve(__dirname, "../views/admin/adm.ejs")),
    create: (req, res) => res.render (path.resolve(__dirname, "../views/admin/creat.ejs")),
    agregar: (req, res) => res.send('esta es la ruta para agregar un nuevo item'),
    edit: (req, res) => res.render (path.resolve(__dirname, "../views/admin/edit.ejs")),
    itemModificación: (req, res) => res.send('esta es la vista para hacer efectiva la modificación de un item'),
    deleteItem: (req, res) => res.send('esta es la ruta para borrar un item específico'),


}