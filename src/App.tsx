import React, { useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import Header from './Header';
import Layout from './Layout';
import Router from './Router';

function App() {
    return (
        <div className=" mx-auto">
            <Header />
            <Layout>
                <Router />
            </Layout>
        </div>
    );
}

export default App;
