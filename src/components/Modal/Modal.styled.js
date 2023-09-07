import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgb(43 43 43 / 60%);
`;

export const ModalContent = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    min-height: 290px;
    padding: 30px;
    border-radius: 24px;
    @media screen and (min-width: 768px) {
        width: 50vw;
        padding: 40px;
    }
`;

export const ModalCloseBtn = styled(AiOutlineClose)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.5);
        fill: #3470ff;
    }
    @media screen and (min-width: 768px) {
        top: 15px;
        right: 15px;
    }
`;
