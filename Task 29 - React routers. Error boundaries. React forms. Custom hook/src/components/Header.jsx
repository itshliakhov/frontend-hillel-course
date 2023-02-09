import '../assets/styles/Header.css';
import {useState} from "react";
import {Link} from "./Link";

export const Header = () => {
    const [error, setError] = useState(undefined);
    const handleError = () => {
        setError({value: true});
    }
    return (
        <header className={"header"}>
            <div className="header__logotype">
                <img src={require("../assets/images/logotype.png")} alt="logotype" className={"header__logotype-img"}/>
            </div>
            <nav className="header__navigation">
                <ul className="header__list">
                    <li className="header__item">
                        <Link to={"/"} className="header__link">Главная</Link>
                    </li>
                    <li className="header__item">
                        <Link to={"/contacts"} className="header__link">Контакты</Link>
                    </li>
                    <button className="header__item" onClick={handleError}>Set Error</button>
                    {error}
                </ul>
            </nav>
        </header>
    )
};