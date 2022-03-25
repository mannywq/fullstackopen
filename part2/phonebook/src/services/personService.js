import axios from 'axios'

const db = 'http://localhost:3001/persons'

const getAll = () => {

    const request = axios.get(db).then(response => response.data)

    return request
}

const create = newObject => {

    const request = axios.post(db, newObject)
    return request.then(response => response.data)

}

const update = (id, newObject) => {

    const request = axios.put(`${db}/${id}`, newObject)
    return request.then(response => response.data)
    
}

export default { getAll, create, update }