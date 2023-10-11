import { Suspense, createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FavoritesProvider } from 'hooks/useFavoritesContext';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Spiner } from 'components/Spiner/Spiner';
import { Box } from '@mui/material';

type ThemeType = 'light' | 'dark';

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const Layout = () => {
    const [mode, setMode] = useState<ThemeType>('light');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            setMode(JSON.parse(savedMode));
        }
        setLoading(false);
    }, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                const newMode = mode === 'light' ? 'dark' : 'light';
                setMode(newMode);
                localStorage.setItem('theme', JSON.stringify(newMode));
            },
        }),
        [mode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    if (loading) {
        return <Spiner />;
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <FavoritesProvider>
                    <Box
                        sx={{
                            backgroundColor:
                                theme.palette.mode === 'dark'
                                    ? 'rgba(0, 0, 0, 0.87)'
                                    : 'transparent',
                            color:
                                theme.palette.mode === 'dark' ? '#ccc' : '#000',
                            minHeight: '100vh',
                        }}
                    >
                        <Navigation />
                        <Suspense fallback={<Spiner />}>
                            <Outlet />
                        </Suspense>
                    </Box>
                </FavoritesProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
