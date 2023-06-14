import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 767px) {
        flex-wrap: wrap;
    }
`;