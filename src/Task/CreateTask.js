import { useEffect, useState } from "react";
import styled from "styled-components";
import { setItem, getItem } from "../utilities";

const CreateTasks = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(0);

  useEffect(() => {
    setTaskList(getItem("taskList") ?? []);
    setTaskId(getItem("totalTasks") ?? 0);
  }, []);

  const createTask = () => {
    const id = taskId + 1;
    const tempTaskList = taskList.length > 0 ? [...taskList] : [];
    tempTaskList.push({
      id,
      name: taskName,
      selected: false,
    });
    setTaskName("");
    setTaskId(id);
    setTaskList(tempTaskList);
    setItem("taskList", tempTaskList);
    setItem("totalTasks", id);
  };

  return (
    <Section >
      <Div>Enter Task Name</Div>
      <Input
        value={taskName}
        name="task-list"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Div className="text-right">
        <Button onClick={createTask}>Create</Button>
      </Div>
    </Section>
  );
};

const Input = styled.input`
  display: block;
  width: 300px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 auto;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
const Button = styled.button`
  background: #db7093;
  border-radius: 4px;
  border: 2px solid #db7093;
  color: #fff;
  margin: 4px 0;
  text-align: right;
  padding: 0.25em 1em;
`;
const Div = styled.div`
  text-align: left;
  width: 300px;
  color: #222;
  font-size: 1rem;
  margin: 4px auto;
  font-weight: 600;
`;
const Section = styled.section`
  text-align: center;
  width: 100%;
  margin: 3rem 0;
`;
export default CreateTasks;
