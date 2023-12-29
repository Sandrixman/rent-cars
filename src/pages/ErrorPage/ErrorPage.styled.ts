import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ErrorImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;

export const ErrorWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    background-image: url('https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80');
    background-size: cover;
    background-position: center center;
    color: #fff;
`;

export const ErrorTitle = styled.h1`
    font-size: 160px;
    @media (width < 768px) {
        font-size: 80px;
    }
`;

export const ErrorText = styled.h2`
    font-size: 80px;
    text-align: center;
    @media (width < 768px) {
        font-size: 40px;
    }
`;

export const ErrorBtn = styled(Button)`
    border-radius: 12px;
    font-size: 40px;
    @media (width < 768px) {
        font-size: 28px;
    }
`;
