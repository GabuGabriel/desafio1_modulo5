import { Link } from "react-router-dom";

export default function Pagina404 ()  {
return(
    <div>
        <h1>404 - Pagina no encontrada</h1>
        <h2>La pagina que estas buscando no existe</h2>
        <Link to="/">
        <button>Volver a Home</button>
        </Link>
    </div>
)
}