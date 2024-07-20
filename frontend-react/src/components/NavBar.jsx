import { Link, useMatch, useResolvedPath,NavLink} from "react-router-dom"
import './css/navBar.css'

export default function NavBar() {
    const path = window.location.pathname
    return (
        <nav className="navBar">
            <Link to="/" className="title-home">
                Home
            </Link>
            <ul>
                <Content to="/register" className="title-register">Register</Content>
                <Content to="/Login" className="title-login">Log In</Content>

                
                 <li><a href="/financial-education">Financial Education</a></li>
                 <li>
          <NavLink to="/scholarships">Scholarships</NavLink>
        </li>
        <li>
          <NavLink to="/loans">Loans</NavLink>
        </li>
       
            </ul>
        </nav>
    )
}

function Content({ to, children, ...props }) {
    const resolved = useResolvedPath(to)
    const isActive = useMatch({ path: resolved.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}