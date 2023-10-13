import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const Card = styled.li`
    position: relative;
    column-gap: 8px;
    list-style-type: none;
`;

export const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px;
`;

export const EmptyHeart = styled(FaRegHeart)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    fill: #96c3ff;
`;

export const ChosenHeart = styled(FaHeart)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    fill: #3470ff;
`;

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
`;

export const DescWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

export const AdditionalInfo = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    column-gap: 8px;
    font-size: 14px;
    line-height: 18px;
`;

export const RentalCarButton = styled(Button)`
    display: flex;
    width: 100%;
    height: 44px;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-transform: capitalize;
    cursor: pointer;
`;
