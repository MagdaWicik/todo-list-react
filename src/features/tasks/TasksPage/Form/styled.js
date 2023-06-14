import styled from "styled-components";

export const FormWrapper = styled.form`
    background-color: rgb(255, 255, 255);
    padding: 20px;
    display: flex;

    @media(max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 1s;
    margin-left: 10px;

    @media(max-width: 767px) {
        flex-grow: 1;
        margin-top: 10px;
    }

        &:hover {
            transform: scale(1.1);
            background-color:rgb(46, 145, 145);
        }
`;