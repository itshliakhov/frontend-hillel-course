import {useState} from "react";
import '../assets/styles/Todo.css';

export function Todo() {
    const [todos, setTodo] = useState([]);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
        const todo = {
            id: Math.random() * 10,
            text: event.target[0].value,
            isDone: false
        }
        setTodo([...todos, todo]);
        setValue('');
    }

    return (
        <div className={"todo-container"}>
            <h1 className={"todo-container__heading"}>To-Do List</h1>
            <form action="homework/src/pages/Todo#" onSubmit={addTodo}>
                <input type="text" className={"todo-container__input"} value={value} onChange={handleChange}/>
                <button className={"todo-container__button"} disabled={value.length < 5}>Add</button>
            </form>
            <h2 className={"todo-container__heading2"}>List of tasks:</h2>
            <div className="todos-block">
                {todos.map((todo, index) => {
                    return (
                        <div className={"todo-block"} key={index}>
                            <label htmlFor={"form"}>
                                <input type="checkbox"/>
                                <span className={"todo-block__span"}>{todo.text}</span>
                                <button>Delete</button>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}