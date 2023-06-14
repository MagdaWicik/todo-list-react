import { useDispatch, useSelector } from "react-redux";
import { StyledButton, Button } from "./styled";
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice";

const DownloadButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectExampleTasksLoading);

    return (
        <StyledButton>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </StyledButton>
    )
};

export default DownloadButton;
