import styled from '@emotion/styled';

export const CarsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CarsWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: repeat(auto-fill, max-content);
    width: 100%;
    padding: 40px 20px;
    gap: 20px;
    margin: auto;
    @media (width > 768px) {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        padding: 40px 0;
        gap: 40px;
        width: 740px;
    }
    @media (width > 1100px) {
        width: 1040px;
    }
    @media (width > 1440px) {
        width: 1400px;
    }
`;
