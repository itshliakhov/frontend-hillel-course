import {Component} from "react";
import {Todos} from "../components/Todos";


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    addTodo = (event) => {
        event.preventDefault()
        this.setState({
            todos: [...this.state.todos, {
            id: Math.random() * 10,
            text: event.target[0].value,
            isDone: false,
            }]},()=>
            event.target[0].value = "")
    }


    render() {
        const {todos} = this.state;
        return (
            <div className={"todo-container"}>
                <h1>To-Do List</h1>
                <form action="#" onSubmit={this.addTodo}>
                    <input type="text"/>
                    <button>Add</button>
                </form>
                <h2>List of tasks:</h2>
                <Todos todos={todos} />
            </div>
        )
    }
}