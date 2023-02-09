import {NavLink} from "react-router-dom";


export const Link = (props) => {
    const {children, href, to} = props;
    return to === undefined
        ? <a href={href}>{children}</a>
        : <NavLink style={{
            textDecoration: "none",
            color: "black",
            fontSize: "24px"
        }} to={to}>{children}</NavLink>
}