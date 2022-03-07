import { Link } from "react-router-dom";

export const MainMenu = () => (
    <nav className="nav justify-content-center">
        <Link className="nav-link" to="/"> Home</Link>
        <Link className="nav-link" to="/favorites">Favoritos</Link>
    </nav>
)