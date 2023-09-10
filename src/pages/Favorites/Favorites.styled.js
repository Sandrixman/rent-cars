import styled from '@emotion/styled';

export const CarsWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    width: 100%;
    padding: 100px 20px 40px;
    gap: 40px;
    margin: auto;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        padding: 100px 0 40px;
        width: 700px;
    }
    @media screen and (min-width: 1100px) {
        width: 1040px;
    }
    @media screen and (min-width: 1440px) {
        width: 1400px;
    }
`;
