module.exports = {

    admin: (req, res) => res.send('route for admin view'),
    create: (req, res) => res.send('esta es la vista de crear un nuevo item'),
    agregar: (req, res) => res.send('esta es la ruta para agregar un nuevo item'),
    edit: (req, res) => res.send('esta es la vista de editar un item'),
    modificación: (req, res) => res.send('esta es la vista para hacer efectiva la modificación de un item'),
    delete: (req, res) => res.send('esta es la ruta para borrar un item específico'),


}