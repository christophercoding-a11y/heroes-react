import { Link } from "react-router"

const Nav =()=> {

    return (
        <nav className=" nav top-nav justify-content-center justify-content-md-evenly">
            <Link to="/">Home</Link>
            <Link to="/hero">Heroes</Link>
            <Link to="/franchise">Franchises</Link>
            <Link to="/power">Powers</Link>
            <Link to="/species">Species</Link>
            <Link to="/team">Teams</Link>
        </nav>
    )
}

export default Nav