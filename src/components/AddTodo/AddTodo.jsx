export const AddTodoItem = ({addItemTodos}) => {
    return (
        <button onClick={() => addItemTodos()}>Добавить задачу</button>
    )
}