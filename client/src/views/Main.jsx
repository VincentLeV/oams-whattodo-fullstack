import React, { useEffect } from "react"
import { TabPanel } from "@mui/lab"

import { useTodos } from "../contexts/TodosContext"
import { useProjects } from "../contexts/ProjectContext"
import { useToast } from "../contexts/ToastContext"
import { sortTodos } from "../utils/helpers"
import Axios from "../services/axios"
import Projects from "./Projects"
import QuickTodos from "./QuickTodos"

export default function Main() {
    const { setTodos } = useTodos()
    const { setProjects } = useProjects()
    const { setToast } = useToast()

    useEffect(() => {
        const getAll = async () => {
            try {
                const allTodos = await Axios.getTodos()
                const allProjects = await Axios.getProjects()
                const sorted = sortTodos(allTodos, "completed")
                setTodos(sorted)
                setProjects(allProjects)
            } catch (err) {
                setToast({ show: true, msg: err.response?.data?.message, severity: "error" })
            }
        }

        getAll()
    }, [])

    return (
        <main>
            <TabPanel value="1">
                <QuickTodos />
            </TabPanel>
            <TabPanel value="2">
                <Projects />
            </TabPanel>
        </main>
    )
}
