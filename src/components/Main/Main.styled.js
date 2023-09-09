import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const MainImage = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    z-index: -1;
`;

export const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    gap: 30px;
    width: 100%;
    height: 70vh;
    background: #0000009e;
    color: #fff;
`;

export const MainTitle = styled.h1`
    font-size: 40px;
`;

export const MainText = styled.h1`
    font-size: 24px;
`;

export const MainButton = styled(Button)`
    margin-top: 400px;
    width: 350px;
    height: 80px;
    font-size: 24px;
    background: #b48200;
    border-radius: 12px;
`;

export const Section = styled.section`
    padding: 50px;
    background: #f5f9ff;
`;

export const AdventageBox = styled.div`
    display: flex;
    gap: 20px;
`;

export const AdventageItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    border-radius: 12px;
    background: #fff;
`;
