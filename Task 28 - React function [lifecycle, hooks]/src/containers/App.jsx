import {useState} from "react";

export function App() {
    const [todos, setTodo] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        const todo = {
            id: Math.random() * 10,
            text: event.target[0].value,
            isDone: false
        }
        setTodo([...todos, todo]);
        event.target[0].value = '';
    }

    return (
        <div className={"todo-container"}>
            <h1>To-Do List</h1>
            <form action="#" onSubmit={addTodo}>
                <input type="text"/>
                <button>Add</button>
            </form>
            <h2>List of tasks:</h2>
            <div className="todos-block">
                {todos.map((todo, index) => {
                    return (
                        <div style={{margin: "20px"}} key={index}>
                            <label>
                                <input type="checkbox"/>
                                <span>{todo.text}</span>
                                <button>Delete</button>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
