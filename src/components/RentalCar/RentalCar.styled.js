import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Image = styled.img`
    width: 100%;
    border-radius: 24px;
    margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
    margin-bottom: 24px;
`;

export const Title = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
`;

export const Span = styled.div`
    color: #3470ff;
`;

export const AdditionalInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    margin-bottom: 14px;
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: 18px;
`;

export const Descr = styled.p`
    color: #121417;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export const RentalCarButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 50px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
`;
