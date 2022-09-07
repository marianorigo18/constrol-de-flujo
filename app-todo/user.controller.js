const User = {
    get: (req, res) => {
        res.status(200).send('Un User');
    },
    list: (req, res) => {
        res.status(200).send('Hello World');
    },
    create: (req, res) => {
        res.send(201).send('Creando User');
    },
    update: (req, res) => {
        res.status(204).send('Actualizando User');
    },
    destroy: (req, res) => {
        res.send(204).send('Eliminando User');
    }
}    

module.exports = User;