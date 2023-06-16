import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() !== "") {
            dispatch(addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));
        }

            setNewTaskContent("");
            focusInput();
        };

        const focusInput = () => {
            inputRef.current.focus();
        };

        return (
            <FormWrapper onSubmit={onFormSubmit}>
                <Input
                    ref={inputRef}
                    value={newTaskContent}
                    placeholder="Co jest do zrobienia?"
                    autoFocus
                    onChange={({ target }) => setNewTaskContent(target.value)}
                />
                <Button>Dodaj zadanie</Button>
            </FormWrapper>
        )
    };

    export default Form;