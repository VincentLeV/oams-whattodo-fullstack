export const sortTodos = (todos, by) => {
    switch (by) {
    case "completed":
        return [...todos].sort((a) => a.isCompleted === false ? -1 : 1)
    case "priority":
        return [...todos].sort((a, b) => a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0)
    default:
        return todos
    }
}