import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style.css';
import Layout from './layouts/Layout';
import Main from './Main';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
