import { Suspense, createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Spiner } from 'components/Spiner/Spiner';
import { Box } from '@mui/material';

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const Layout = () => {
    const [mode, setMode] = useState('light');
    // const [cars, setCars] = useState();

    // console.log(getCars());

    useEffect(() => {}, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
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

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Navigation />
                    <Suspense fallback={<Spiner />}>
                        <Outlet />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
