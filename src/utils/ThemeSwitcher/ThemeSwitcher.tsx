import { Box, FormControlLabel } from '@mui/material';
import { useColorModeContext } from 'hooks';
import { MaterialUISwitch } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
    const { toggleColorMode } = useColorModeContext();

    return (
        <>
            <Box>
                <FormControlLabel
                    control={<MaterialUISwitch onClick={toggleColorMode} defaultChecked />}
                    label=""
                />
            </Box>
        </>
    );
};
