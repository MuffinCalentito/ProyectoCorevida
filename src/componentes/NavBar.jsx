import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(  
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='nav-logo'><img src="/src/assets/corevida.png" width="100px"/></Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Nosotros" className='nav-link'>Nosotros</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Servicios" className='nav-link'>Servicios</Link>
                    </li>
                </ul>
                
                
                
            </div>
        </nav>
    );
}