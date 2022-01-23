import axios from "axios"
const baseUrl = "https://oams-whattodo-rexpmongo-api.herokuapp.com"
// const baseUrl = "http://localhost:5000"

const getTodos = async () => {
    const req = await axios.get(`${baseUrl}/api/todos`)
    return req.data
}

const getProjects = async () => {
    const req = await axios.get(`${baseUrl}/api/projects`)
    return req.data
}

const getTodo = async (id) => {
    const req = await axios.get( `${baseUrl}/api/todos/${id}` )
    return req.data
}

const getProject = async (id) => {
    const req = await axios.get( `${baseUrl}/api/projects/${id}` )
    return req.data
}

const createTodo = async newTodo => {
    const res = await axios.post(`${baseUrl}/api/todos`, newTodo)
    return res.data
}

const createProject = async newProj => {
    const res = await axios.post(`${baseUrl}/api/projects`, newProj)
    return res.data
}

const updateTodo = async (id, edu) => {
    const res = await axios.put(`${baseUrl}/api/todos/${id}`, edu)
    return res.data
}

const updateProject = async (id, proj) => {
    const res = await axios.put(`${baseUrl}/api/projects/${id}`, proj)
    return res.data
}

const deleteTodo = async id => {
    const res = await axios.delete(`${baseUrl}/api/todos/${id}`)
    return res.data
}

const deleteProject = async id => {
    const res = await axios.delete(`${baseUrl}/api/projects/${id}`)
    return res.data
}

const deleteProjectTodo = async (projId, todoId) => {
    const res = await axios.delete(`${baseUrl}/api/projects/${projId}/todo/${todoId}`)
    return res.data
}


const Axios = {
    getTodos,
    getProjects,
    getTodo,
    getProject,
    createTodo,
    createProject,
    updateTodo,
    updateProject,
    deleteTodo,
    deleteProject,
    deleteProjectTodo
}

export default Axios