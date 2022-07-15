import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Frontpage from './Frontpage';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Frontpage />} />
        </Routes>
    );
}
