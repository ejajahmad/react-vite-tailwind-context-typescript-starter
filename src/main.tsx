import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateContext } from '../context/StateContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StateContext>
            <App />
        </StateContext>
    </React.StrictMode>
);
