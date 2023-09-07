import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const Card = styled.div`
    width: 325px;
    column-gap: 8px;
`;

export const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px;
`;

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DescWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

export const AdditionalInfo = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    font-size: 12px;
    line-height: 18px;
`;

export const RentalCarButton = styled(Button)`
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
`;
