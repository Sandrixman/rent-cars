import styled from '@emotion/styled';
import { Typography, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    width: 1440px;
    margin: auto;
`;

export const TypographyStyled = styled(Typography)`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const LinkStyled = styled(NavLink)`
    gap: 10px;
    text-decoration: none;
    color: inherit;

    &.active {
        color: orange;
    }
`;
