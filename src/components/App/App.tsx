import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Catalog />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
}
