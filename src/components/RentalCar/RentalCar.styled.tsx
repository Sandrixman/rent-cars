import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const Image = styled.img`
    width: 100%;
    border-radius: 24px;
    margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
    margin-top: 24px;
`;

export const Title = styled.div`
    display: flex;
    gap: 8px;
    font-size: 24px;
    font-weight: 500;
`;

export const Span = styled.div`
    color: #3470ff;
`;

export const AdditionalInfo = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    margin-top: 8px;
    font-size: 14px;
`;

export const Descr = styled.p`
    margin-top: 24px;
    font-size: 18px;
    font-weight: 400;
`;

export const InfoTitle = styled.div`
    font-weight: 700;
`;

export const ConditionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Conditions = styled.div`
    display: flex;
    gap: 10px;
    padding: 14px 20px;
    border-radius: 35px;
    background: #f9f9f9;
`;

export const RentalCarButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px auto 0;
    padding: 12px 50px;
    border-radius: 12px;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
`;
