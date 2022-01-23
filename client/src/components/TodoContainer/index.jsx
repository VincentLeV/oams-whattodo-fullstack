import React from "react"
import { Box, Divider } from "@mui/material"

import Axios from "../../services/axios"
import { useTodos } from "../../contexts/TodosContext"
import { sortTodos } from "../../utils/helpers"
import Todo from "../Todo"

export default function TodoContainer({ todo }) {
    const { todos, setTodos } = useTodos()

    const handleChange = async (e) => {
        let found = todos.find(x => x.id === e.target.name)

        found.isCompleted = e.target.checked

        if ( e.target.checked  ) {
            const newTodos = todos.filter(x => x.id !== e.target.name)
            setTodos([ ...newTodos, found ])
        } else if ( !e.target.checked ) {
            const index = todos.findIndex(x => x.id === e.target.name)
            todos.splice(index, 1, found)
            setTodos(sortTodos([ ...todos ], "priority"))
        }

        handleUpdateCompletion(found)
    }

    const handleUpdateCompletion = async (todo) => {
        try {
            await Axios.updateTodo(todo.id, todo)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box>
            <Todo from="quickTodo" todo={todo} handleChange={handleChange} />
            <Divider />
        </Box>
    )
}
