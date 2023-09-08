import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const FilterConteiner = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 18px;
    width: 70vw;
    padding-top: 120px;
    margin: auto;
`;

export const Label = styled.label`
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
`;

export const InputWrapper = styled.div`
    display: flex;
    margin-top: 8px;
    border: none;
    border-radius: 12px;
    overflow: hidden;
`;

export const Separator = styled.div`
    width: 2px;
    height: 100%;
    background-color: #ccc;
`;

export const Input = styled.input`
    background: #f7f7fb;
    width: 160px;
    height: 40px;
    padding: 14px 24px;
    border: none;
    &:focus-visible {
        outline: none;
    }
`;

export const FilterBtn = styled(Button)`
    height: 40px;
    padding: 14px 44px;
    border-radius: 12px;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
`;
