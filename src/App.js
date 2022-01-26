import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Task/Home";
import ListTask from "./Task/ListTask";
import CreateTask from "./Task/CreateTask";
import styled from "styled-components";
import Navbar from "./Task/Navbar";
import BulkDelete from "./Task/DeleteTask";

function App() {
  const Div = styled.div`
    text-align: center;
    width: calc(800px - 24px);
    margin: 0 auto;
    background: #f7f7f7;
    padding: 12px;
    min-height: 100vh;
  `;
  return (
    <Router>
      <Div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list-tasks" component={ListTask} />
          <Route exact path="/create-task" component={CreateTask} />
          <Route exact path="/bulk-delete" component={BulkDelete} />
        </Switch>
      </Div>
    </Router>
  );
}

export default App;
