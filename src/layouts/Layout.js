import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from "../components/Aside";
import Footer from '../components/Footer';

function Layout() {
    return (
        <div id="colorlib-page">
            <div id="colorlib-main">
                <Aside />
                <Outlet />
                <Footer/>
            </div>
            
        </div>
    );
}

export default Layout;
