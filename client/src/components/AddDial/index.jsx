import React, { useState } from "react"
import {
    Box,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon
} from "@mui/material"
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded"
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded"

export default function AddDial({ isModalOpen, setIsModalOpen, setModalType }) {
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const openTodoModal = () => {
        setModalType("todo")
        setIsModalOpen(!isModalOpen)
    }
    const openProjectModal = () => {
        setModalType("project")
        setIsModalOpen(!isModalOpen)
    }

    const actions = [
        { icon: <FactCheckRoundedIcon onClick={openTodoModal} />, name: "Todo" },
        { icon: <AccountTreeRoundedIcon onClick={openProjectModal} />, name: "Project" },
    ]

    return (
        <Box 
            id="add-dial" 
            sx={{ 
                position: { xs: "fixed", md: "absolute" }, 
                bottom: { xs: "5vh", md: "3vh" }, 
                right: { xs: "3vw", md: "-3vw" } 
            }}
        >
            <SpeedDial
                ariaLabel="Add Dial"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        id={`add-${action.name.toLowerCase()}-btn`}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
