import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateContext } from '../context/StateContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <StateContext>
                    <App />
                </StateContext>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
