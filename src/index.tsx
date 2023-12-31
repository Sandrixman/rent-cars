import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { ColorModeProvider } from 'hooks';
import { App } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter basename="rent-cars">
            <GlobalStyle />
            <ColorModeProvider>
                <App />
            </ColorModeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
