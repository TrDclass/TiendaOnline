import model from '../models/users.js'

let data = [...model];
let counter = data.length

const findAll = () => {
    return data;
}

const findOne = (id) => {
    const result = data.find(x => x.id == id );

    return result;
}

const create = (payload) => {
    counter++;
    payload.id = counter;
    data.push(payload);
    return payload;
} 

const update = (payload) => {
    const index = data.findIndex(item => item.id == payload.id)

    if (index > -1) {
        data[index] = payload;
        return payload;
    } else  
        return null;
}

const remove = (id) => {
    console.log(id)
    const index = data.findIndex(item => item.id == id)

    if (index > -1) {
        data.splice(index,1);
        return true;
    } else  
        return false;
}


const repository = { findAll, findOne, create, update, remove }

export default repository;