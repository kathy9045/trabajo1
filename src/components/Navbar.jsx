import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Asegúrate de incluir tu archivo de estilos
import Search from './search';
import MinNav from './minNav';

const NavBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOverlayClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('nav')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className={isOpen ? 'open' : ''}>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <i className="bx bx-menu menu-icon" onClick={handleMenuClick}></i>
                        <span className="logoform">
                            <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                <line id="line1" x1="150" y1="31.1" x2="100" y2="56.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line2" x1="100" y1="56.1" x2="50" y2="31.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line3" x1="50" y1="31.1" x2="100" y2="6.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line4" x1="100" y1="6.1" x2="150" y2="31.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line5" x1="100" y1="56.1" x2="100" y2="100" stroke="#ffffff" strokeWidth="6" />
                                <line id="line6" x1="50" y1="31.1" x2="50" y2="131.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line7" x1="150" y1="31.1" x2="150" y2="131.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line8" x1="50" y1="131.1" x2="100" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line9" x1="150" y1="131.1" x2="100" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line10" x1="50" y1="131.1" x2="20" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line11" x1="150" y1="131.1" x2="180" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line12" x1="20" y1="161.1" x2="100" y2="211.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line13" x1="180" y1="161.1" x2="100" y2="211.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line14" x1="20" y1="161.1" x2="20" y2="51.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line15" x1="180" y1="161.1" x2="180" y2="51.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line16" x1="20" y1="50" x2="100" y2="101.1" stroke="#ffffff" strokeWidth="6" />
                                <line id="line17" x1="180" y1="51.1" x2="100" y2="101.1" stroke="#ffffff" strokeWidth="6" />
                            </svg>
                        </span>
                        <span className="logoname">MegaMuebles</span>
                    </div>

                    <form className="from_search" role="search">
                        <Search/>
                    </form>
                    <ul className="list_nav">
                        <li className="list">
                            <Link to="#" className="nav-link">
                                <i className='bx bx-bell icon'></i>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="#" className="nav-link">
                                <i className='bx bxs-cart icon'></i>
                            </Link>
                        </li>
                        
                        <li className="list">
                            <Link className="nav-link" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bx bxs-user-circle icon" />
                            </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/Register">Registrate</Link></li>
                            <li><Link className="dropdown-item" to="/Login">Inicia Sesion</Link></li>
                        </ul>
                        </li>
                        <div className="whatsapp-section">
                        <Link to="https://wa.me/573232039616" target="_blank" className="whatsapp-link">
                            <div className="whatsapp-profile">
                                <div className="whatsapp-info">
                                    <span className="whatsapp-number">+57 323 2039616</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                        
                    </ul>
                </div>
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="logo">
                    <i className='bx bx-menu menu-icon' onClick={handleMenuClick}></i>
                    <span className="logoform">
                        <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                            <line id="line1" x1="150" y1="31.1" x2="100" y2="56.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line2" x1="100" y1="56.1" x2="50" y2="31.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line3" x1="50" y1="31.1" x2="100" y2="6.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line4" x1="100" y1="6.1" x2="150" y2="31.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line5" x1="100" y1="56.1" x2="100" y2="100" stroke="#ffffff" strokeWidth="6" />
                            <line id="line6" x1="50" y1="31.1" x2="50" y2="131.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line7" x1="150" y1="31.1" x2="150" y2="131.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line8" x1="50" y1="131.1" x2="100" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line9" x1="150" y1="131.1" x2="100" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line10" x1="50" y1="131.1" x2="20" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line11" x1="150" y1="131.1" x2="180" y2="161.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line12" x1="20" y1="161.1" x2="100" y2="211.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line13" x1="180" y1="161.1" x2="100" y2="211.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line14" x1="20" y1="161.1" x2="20" y2="51.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line15" x1="180" y1="161.1" x2="180" y2="51.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line16" x1="20" y1="50" x2="100" y2="101.1" stroke="#ffffff" strokeWidth="6" />
                            <line id="line17" x1="180" y1="51.1" x2="100" y2="101.1" stroke="#ffffff" strokeWidth="6" />
                        </svg>
                    </span>
                    <span className="logoname">MegaMuebles</span>
                </div>
                <div className="sidebar-content">
                    <ul className="lists">
                        <li className="list">
                            <Link to="#" className="nav-link">
                                <i className='bx bx-home-alt icon'></i>
                                <span className="link">Inicio</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/" className="nav-link">
                                <i className='bx bx-store icon'></i>
                                <span className="link">Catalogo</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="#" className="nav-link">
                                <i className='bx bxs-cart icon'></i>
                                <span className="link">Tu Carrito</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="#" className="nav-link">
                                <i className='bx bx-heart icon'></i>
                                <span className="link">Favoritas</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="bottom-cotent">
                        <ul className="lists">
                            <li className="list">
                                <Link to="#" className="nav-link">
                                    <i className='bx bx-cog icon'></i>
                                    <span className="link">Configuraciones</span>
                                </Link>
                            </li>
                            <li className="list">
                                <Link to="#" className="nav-link">
                                    <i className='bx bx-log-out icon'></i>
                                    <span className="link">Cerrar Sesion</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <MinNav/>

            <section className={`overlay ${isOpen ? 'visible' : ''}`} onClick={handleOverlayClick}></section>
        </nav>
    );
};

export default NavBar;
