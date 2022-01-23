import React from "react"
import { 
    AppBar,
    Typography
} from "@mui/material"

import AppLogo from "../../assets/app.svg"

export default function Appbar() {
    return (
        <AppBar 
            position="absolute" 
            sx={{ display: "flex", flexDirection: "row", alignItems: "center", padding: { xs: "8px", md: "8px 4vw" } }}
        >
            <img src={AppLogo} alt="App Logo" width="50px" height="50px" />

            <Typography
                variant="h5"
                noWrap
                component="div"
                mx={1}
            >
                WhatToDo
            </Typography>
        </AppBar>
    )
}
