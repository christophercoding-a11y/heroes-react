import { Link } from "react-router"

const Nav =()=> {

    return (
        <nav className=" nav top-nav justify-content-center justify-content-md-evenly">
            <Link to="/">home</Link>
            <Link to="/heroes"> heroes</Link>
            <Link to="/franchises">Franchises</Link>
        </nav>
    )
}

export default Nav