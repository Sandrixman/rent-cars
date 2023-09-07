import { AppBar, Toolbar } from '@mui/material';
import { LinkStyled, TypographyStyled } from './Navigation.styled';
import { ThemeSwitcher } from 'utils/ThemeSwitcher';

export const Navigation = () => {
    return (
        <>
            <AppBar
                position="static"
                elevation={16}
                sx={{ height: 'fit-content' }}
            >
                <Toolbar>
                    <TypographyStyled variant="h6" sx={{ flexGrow: 1 }}>
                        <LinkStyled to={'/'}>Home</LinkStyled>
                        <LinkStyled to={'catalog'}>Catalog</LinkStyled>
                        <LinkStyled to={'favorites'}>Favorites</LinkStyled>
                        <ThemeSwitcher />
                    </TypographyStyled>
                </Toolbar>
            </AppBar>
        </>
    );
};
