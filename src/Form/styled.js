import styled from "styled-components";

export const FormWrapper = styled.form`
    background-color: rgb(255, 255, 255);
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    padding: 10px;
    width: 600px;
    outline-color: rgb(215, 215, 215);

    @media(max-width: 767px) {
        flex-grow: 1;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: rgb(33, 114, 114);
    color: rgb(248, 241, 241);
    border: none;
    transition: 1s;

    @media(max-width: 767px) {
        flex-grow: 1;
        margin-top: 10px;
    }

        &:hover {
            transform: scale(1.1);
            background-color:rgb(46, 145, 145);
        }
`;