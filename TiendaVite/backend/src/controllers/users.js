import repository from '../repositories/users.js'

const findAll = (req, res) => {

    const result = repository.findAll();

    return sendResults(result,res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = repository.findOne(id);

    return sendResults(result,res);
}

const create = (req, res) => {
    const payload = req.body;

    const result = repository.create(payload);

    return sendResults(result,res)
}

const update = (req, res) => {
    const payload = req.body;

    const result = repository.update(payload);

    return sendResults(result,res)
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);

    return sendResults(result,res);
}

const sendResults = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: "Ha ocurrido un error!"})
}

const controller = { findAll, findOne, create, update, remove }

export default controller;