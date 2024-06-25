import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Layout from './layouts/Layout';
import Main from './Main';
import Skill from './components/Skill';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="skill" element={<Skill />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
