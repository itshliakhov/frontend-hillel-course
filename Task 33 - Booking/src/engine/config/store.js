// Core
import {configureStore} from '@reduxjs/toolkit';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
// Engine
import destination from '../core/destination/slice'; /* We take reducer from slice.js */
import hotels from '../core/hotels/slice';
import {rootSaga} from './rootSaga';
// Middleware
const sagaMiddleware = createSagaMiddleware();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({
    history: createBrowserHistory()
})

const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels,
        destination
    },
    middleware: () => [sagaMiddleware, routerMiddleware]
})

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

export default store;
