import { Link } from "react-router"

const Nav =()=> {

    return (
        <nav className=" nav top-nav justify-content-center justify-content-md-between">
            <Link to="/">home</Link>
            <Link to="/heroes"> heroes</Link>
        </nav>
    )
}

export default Nav