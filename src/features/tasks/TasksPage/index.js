import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import DownloadButton from "./DownloadButton";

function TasksPage() {
  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<DownloadButton />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </main>
  );
}

export default TasksPage;
