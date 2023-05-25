import styled from "styled-components";

export const Header = styled.header`
    background-color: rgb(255, 255, 255);
    margin-bottom: 2px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
    font-weight: 700;
`;
