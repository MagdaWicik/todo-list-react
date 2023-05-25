import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: teal;
    background-color: transparent;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    justify-content: flex-end;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

        &:hover {
            color: rgb(0, 170, 170);
        }

        &:disabled {
            color: #ccc;
        }
`;

