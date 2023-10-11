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
    color: #fff;
`;

export const ErrorTitle = styled.h1`
    font-size: 160px;
`;

export const ErrorText = styled.h2`
    font-size: 80px;
`;

export const ErrorBtn = styled(Button)`
    border-radius: 12px;
    font-size: 40px;
`;
