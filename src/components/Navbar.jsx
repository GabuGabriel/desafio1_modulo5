import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav class="navbar bg-primary">
            <div class="d-flex justify-content-center align-items-center align-content-cente">
                <Link to="/">
                    <img src="\src\assets\home.svg" alt="" height="20px" />
                    <a class="navbar-brand" href="#" >Home</a>
                </Link>

                <Link to="Contactos">
                <img src="\src\assets\contact.svg" alt="" height="20px" />
                    <a class="navbar-brand" href="#">Contactos</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar