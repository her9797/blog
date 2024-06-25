import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Aside = () => {
    const location = useLocation();

    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <h1 id="colorlib-logo">
                <NavLink exact to="/" activeClassName="active-link">
                    <span className="img" style={{ backgroundImage: 'url(/minseop1.jpg)' }}></span>심민섭
                </NavLink>
            </h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li className={location.pathname === '/' ? 'colorlib-active' : ''}>
                        <NavLink exact to="/" activeClassName="colorlib-active">Home</NavLink>
                    </li>
                    <li className={location.pathname === '/about' ? 'colorlib-active' : ''}>
                        <NavLink to="/about" activeClassName="colorlib-active">About Me</NavLink>
                    </li>
                    <li className={location.pathname === '/skill' ? 'colorlib-active' : ''}>
                        <NavLink to="/skill" activeClassName="colorlib-active">Skills</NavLink>
                    </li>
                    <li className={location.pathname === '/projects' ? 'colorlib-active' : ''}>
                        <NavLink to="/projects" activeClassName="colorlib-active">My Projects</NavLink>
                    </li>
                    <li className={location.pathname === '/contact' ? 'colorlib-active' : ''}>
                        <NavLink to="/contact" activeClassName="colorlib-active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
