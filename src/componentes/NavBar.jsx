import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                    <img src="/src/assets/corevida-v2.png" alt="CoreVida Logo" />
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nosotros" className="nav-link" onClick={() => setIsOpen(false)}>Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/servicios" className="nav-link" onClick={() => setIsOpen(false)}>Servicios</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}