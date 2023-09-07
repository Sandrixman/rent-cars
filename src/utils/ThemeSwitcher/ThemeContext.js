import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material';

export const ThemeContext = () => {
    const [mode, setMode] = useState('light');

    console.log(mode);

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return { toggleColorMode, theme };
};
