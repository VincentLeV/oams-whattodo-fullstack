const router = require("express").Router()
const Todo = require("../models/todo")
const Project = require("../models/project")

router.post("/reset", async (_, res) => {
    await Todo.deleteMany({})
    await Project.deleteMany({})

    res.status(204).end()
})

module.exports = router