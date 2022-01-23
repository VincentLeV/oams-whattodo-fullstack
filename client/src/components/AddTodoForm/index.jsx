import React, { useState } from "react"
import {
    Box,
    FormControl,
    InputLabel, 
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button
} from "@mui/material"
import FlagRoundedIcon from "@mui/icons-material/FlagRounded"

import Axios from "../../services/axios"
import { useTodos } from "../../contexts/TodosContext"
import { sortTodos } from "../../utils/helpers"
import PriorityMenu from "../PriorityMenu"
import { useToast } from "../../contexts/ToastContext"
import DTPicker from "../DTPicker"

export default function AddTodoForm({ setIsModalOpen }) {
    const { setTodos } = useTodos()
    const { setToast } = useToast()
    const [ anchorEl, setAnchorEl ] = useState(null)
    const [ values, setValues ] = useState({ desc: "" })
    const [ priority, setPriority ] = useState({ label: "", value: 0, color: "" })
    const [ deadline, setDeadline ] = useState(new Date()) 

    const handleChange = (type) => (e) => {
        setValues({ ...values, [type]: e.target.value })
    }

    const handleAddTodo = async () => {
        setValues({ desc: "" })

        try {
            const newTodo = { description: values.desc, priority: priority.value, deadline: deadline, isCompleted: false }
            await Axios.createTodo(newTodo)
            setIsModalOpen(false)

            const newTodos = await Axios.getTodos()
            const sorted = sortTodos(newTodos, "priority")
            setTodos(sorted)

            setToast({ show: true, msg: "Successfully added new todo", severity: "success" })
        } catch (err) {
            setToast({ 
                show: true, 
                msg: err?.response?.data?.message, 
                severity: "error" 
            })
        }
    }

    return (
        <Box sx={{ mt: 2 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="task-description">Description</InputLabel>
                <OutlinedInput
                    id="todo-description-input"
                    value={values.desc}
                    onChange={handleChange("desc")}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-controls="priority-menu"
                                aria-haspopup="true"
                                aria-label="Change Priority"
                                aria-expanded={anchorEl ? "true" : undefined}
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                                edge="end"
                            >
                                <FlagRoundedIcon color={priority.color} />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Description"
                />

                <PriorityMenu 
                    anchorEl={anchorEl} 
                    setAnchorEl={setAnchorEl}
                    setPriority={setPriority} 
                />

                <DTPicker value={deadline} setValue={setDeadline} />
            </FormControl>

            <Button 
                id="add-todo-btn"
                sx={{ mt: 3, mb: 1 }}
                variant="contained" 
                size="medium"
                onClick={handleAddTodo}
            >
                Add Todo
            </Button>
        </Box>
    )
}
