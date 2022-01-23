import React from "react"
import {
    Menu,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"

import Axios from "../../services/axios"
import { useToast } from "../../contexts/ToastContext"
import { useTodos } from "../../contexts/TodosContext"
import { sortTodos } from "../../utils/helpers"

export default function EditTodoMenu({ todo, anchor, setAnchor, setIsModalOpen }) {
    const { setToast } = useToast()
    const { todos, setTodos } = useTodos()

    const handleClose = (i, reason) => {
        if ( reason === "backdropClick" ) {
            setAnchor(null)
            return
        }
        
        setAnchor(null)
    }

    const handleDeleteTodo = async () => {
        try {
            if ( window.confirm( "Do you really want to delete this todo?" ) ) {
                await Axios.deleteTodo(todo.id)
                const newTodos = todos.filter(t => t.id !== todo.id)
                const sorted = sortTodos(newTodos, "completed")
                setTodos(sorted)

                setAnchor(null)

                setToast({ show: true, msg: "Successfully deleted new todo", severity: "success" })
            }
        } catch (err) {
            setToast({ show: true, msg: err.response?.data?.message, severity: "error" })
        }
    }

    return (
        <Menu
            id="edit-todo-menu"
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
        >
            <MenuList dense>
                <MenuItem onClick={() => setIsModalOpen(true)} className="edit-menu-item edit">
                    <ListItemIcon>
                        <EditRoundedIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleDeleteTodo} className="edit-menu-item delete">
                    <ListItemIcon>
                        <DeleteRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
