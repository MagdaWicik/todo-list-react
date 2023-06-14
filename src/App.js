import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink } from "./styled";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { List } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <List>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
        </li>
      </List>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);