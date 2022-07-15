import React, { useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import OverlaySpinner from './Common/OverlaySpinner';
import Header from './Header';
import Layout from './Layout';
import Router from './Router';

function App() {
    const { loading } = useStateContext();
    return (
        <div className=" mx-auto">
            <Header />
            <Layout>
                <Router />
            </Layout>
            {loading && <OverlaySpinner />}
        </div>
    );
}

export default App;
