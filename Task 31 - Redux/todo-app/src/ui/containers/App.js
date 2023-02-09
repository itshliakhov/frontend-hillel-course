import {Provider} from "react-redux";
// Parts
import Todoslist from "../components/Todoslist";
// Engine
import {store} from "../../engine/init/store";
import {AddTodo} from "../components/AddTodo";
import Footer from "../components/Footer";

const App = () => {


    return (
        <Provider store={store}>
            <div className="container">
                <h1>To-Do List</h1>
                <br/>
                <AddTodo/>
                <h2>Your To-Do List</h2>
                <br/>
                <Todoslist/>
                <br/>
                <Footer/>
            </div>
        </Provider>
    )

}

export default App;