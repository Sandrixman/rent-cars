import { AppBar } from '@mui/material';
import { ThemeSwitcher } from 'utils/ThemeSwitcher/ThemeSwitcher';
import * as SC from './Navigation.styled';

export const Navigation = () => {
    return (
        <AppBar position="fixed" elevation={16}>
            <SC.StyledToolbar>
                <SC.TypographyStyled variant="h6">
                    <SC.LinkStyled to={'/'}>Home</SC.LinkStyled>
                    <SC.LinkStyled to={'catalog'}>Catalog</SC.LinkStyled>
                    <SC.LinkStyled to={'favorites'}>Favorites</SC.LinkStyled>
                </SC.TypographyStyled>
                <ThemeSwitcher />
            </SC.StyledToolbar>
        </AppBar>
    );
};
