import {Header} from "./components/Header";
import {Todo} from "./pages/Todo";
import {Contacts} from "./pages/Contacts";
import {ErrorBoundary} from "./components/utils/ErrorBoundary";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => (
    <>
        <ErrorBoundary>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Todo/>}/>
                    <Route path={"/contacts"} element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    </>
);

