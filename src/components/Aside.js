import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <h1 id="colorlib-logo">
                <NavLink exact to="/" activeClassName="active-link">
                    <span className="img" style={{backgroundImage: 'url(/minseop1.jpg)'}}></span>심민섭
                </NavLink>
            </h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li><NavLink exact to="/" activeClassName="colorlib-active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="colorlib-active">About Me</NavLink></li>
                    <li><NavLink to="/skill" activeClassName="colorlib-active">Skills</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="colorlib-active">My Projects</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="colorlib-active">Contact</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
