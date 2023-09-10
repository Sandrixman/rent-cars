import styled from '@emotion/styled';
import { Typography, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    @media screen and (min-width: 768px) {
        width: 720px;
    }
    @media screen and (min-width: 1100px) {
        width: 1060px;
    }
    @media screen and (min-width: 1440px) {
        width: 1400px;
    }
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
    font-size: 14px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
    &.active {
        color: orange;
    }
`;
