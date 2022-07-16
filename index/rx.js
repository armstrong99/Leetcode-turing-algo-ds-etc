const todo = useCallback(() => {
    setTodos(t => [...t, "new todo"])
}, [todo])