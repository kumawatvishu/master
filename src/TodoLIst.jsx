import InputBox from "./todoApp";
let inisialTodos = [
    { id: 1, tital: "how are you 0", isCompleted: false },
    { id: 2, tital: "how are you 1", isCompleted: false },
    { id: 3, tital: "how are you 2", isCompleted: true },
    { id: 4, tital: "how are you 3", isCompleted: true },
    { id: 5, tital: "how are you 4", isCompleted: false },
];
function UpdateTodoState(checked, value) {
    [...inisialTodos].map((todo) => {
        if (todo.id == value) {
            todo.isCompleted = checked;
            console.log(todo.isCompleted);
        }
    })
}
function AddTodo() {
    function handleTodoChackbox(event) {
     UpdateTodoState(event.target.checked, event.target.value);
    }
    return (
        <div>
            <InputBox inisialTodos={inisialTodos} onStatuschange={() => UpdateTodoState(checked, value)} />
            {...inisialTodos.map((todo) => {
                return (<li>
                    <input type="checkbox"
                        id={`todo-check-${todo.id}`}
                        value={todo.id}
                        onChange={handleTodoChackbox}></input>
                    <label>  {todo.tital} </label>
                    <div>{todo.isCompleted ? "completed" : "pending"}</div>
                </li>)
            })}
        </div>
    )
}
export default AddTodo
