import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { FavoritesProvider, useColorModeContext } from 'hooks';
import { Navigation, Spiner } from 'components';

export const Layout = () => {
    const { mode } = useColorModeContext();

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <FavoritesProvider>
                <Box
                    sx={{
                        backgroundColor:
                            theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.87)' : 'transparent',
                        color: theme.palette.mode === 'dark' ? '#ccc' : '#000',
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
    );
};
