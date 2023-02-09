import {Provider} from 'react-redux';
// Engine
import {store} from "../../engine/config/store";

// UI
import {ButtonIncrement} from './ButtonIncrement';
import {ButtonDecrement} from './ButtonDecrement';
import {Counter} from './Counter';

const App = () => (
    <Provider store={store}>
        <div className="App">
            <p>
                <ButtonIncrement/>
                <Counter/>
                <ButtonDecrement/>
            </p>
        </div>
    </Provider>
)

export default App;