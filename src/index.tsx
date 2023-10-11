// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import App from 'components/App/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <BrowserRouter basename="rent-cars">
        <GlobalStyle />
        <App />
    </BrowserRouter>
    // </React.StrictMode>
);
