import { Provider } from 'react-redux';
// Parts
import { TodosList } from '../components/TodosList';
import {Footer} from "../components/Footer";
// Engine
import { store } from "../../engine/init/redux";
import { AddTodo } from "../components/AddTodo";

export function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <h1>TODO</h1>
                <AddTodo />
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <TodosList />
                <Footer />
            </div>
        </Provider>
    )
}
