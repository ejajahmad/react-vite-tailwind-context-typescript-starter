import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Frontpage from './Frontpage';
import ListingPage from './ListingPage';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/listings/:id" element={<ListingPage />} />
        </Routes>
    );
}
