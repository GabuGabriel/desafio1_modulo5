import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav class="navbar bg-primary">
            <div class="container-fluid">
                <Link to="/"><a class="navbar-brand" href="#">Home</a></Link>
                <Link to="Contactos"><a class="navbar-brand" href="#">Contactos</a></Link>
            </div>
        </nav>
    )
}
export default Navbar