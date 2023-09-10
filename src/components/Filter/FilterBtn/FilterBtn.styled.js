import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const FilterBtn = styled(Button)`
    width: 70px;
    height: 40px;
    padding: 18px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    @media screen and (min-width: 768px) {
        width: 100px;
        padding: 14px 44px;
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (min-width: 1100px) {
        width: 160px;
    }
`;
