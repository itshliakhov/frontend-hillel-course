
export function Todos(props) {
    const { todos } = props;

    return (
        <div className={"todos-wrapper"}>
            {todos.map(todo => {
                return (
                    <div style={{margin: "20px"}} key={todo.id}>
                    <label  >
                        <input type="checkbox"/>
                        <span>{todo.text}</span>
                        <button>Delete</button>
                    </label>
                    </div>
                )
            })}
        </div>
    )
}