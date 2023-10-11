import styled from '@emotion/styled';

export const FilterConteiner = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
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
    width: 70px;
    height: 40px;
    padding: 14px;
    border: none;
    &:focus-visible {
        outline: none;
    }
    @media screen and (min-width: 768px) {
        padding: 14px 24px;
        nim-width: 100px;
    }
    @media screen and (min-width: 1100px) {
        width: 160px;
    }
`;
