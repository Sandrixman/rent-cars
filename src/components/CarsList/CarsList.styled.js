import styled from '@emotion/styled';

export const CarsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CarsWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 50px;
    width: 1440px;
    padding: 40px 0;
    margin: auto;
`;
