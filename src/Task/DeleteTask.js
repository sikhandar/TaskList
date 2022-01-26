import { useEffect, useState } from "react";
import styled from "styled-components";
import { emptyList } from "../constants";
import { getItem, setItem } from "../utilities";

const BulkDelete = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(getItem("taskList"));
  }, []);

  const handleCheckbox = (e, index) => {
    const tempTaskList = [...taskList];
    tempTaskList[index].selected = e.target.checked;
    setTaskList(tempTaskList);
  };

  const deleteTasks = () => {
    const filteredData = taskList.filter((task) => task.selected === false);
    setTaskList(filteredData);
    setItem("taskList", filteredData);
  };

  const selectAll = (e) => {
    const tempTaskList = [...taskList];
    tempTaskList.forEach((task) => (task.selected = e.target.checked));
    setTaskList(tempTaskList);
    setItem("taskId", 0);
  };

  console.log(taskList);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        {taskList.length > 0 && (
            <Labels htmlFor="allDelete">
              {" "}
              <input id="allDelete" type="checkbox" onChange={selectAll} /> Select All
            </Labels>
        )}
        {taskList.length > 0 && (
          <Div>
            <Button onClick={deleteTasks}>Delete</Button>
          </Div>
        )}
      </div>
      {taskList?.length > 0 ? (
        taskList?.map((task, index) => (
          <Label
            key={index}
            className="d-flex align-items-center"
            htmlFor={task.id}
          >
            <Input
              type="checkbox"
              id={task.id}
              checked={task.selected}
              onChange={(e) => handleCheckbox(e, index)}
            />

            <DIV>
              {task.name} ({task.id})
            </DIV>
          </Label>
        ))
      ) : (
        <Div className="my-5">{emptyList}</Div>
      )}
    </>
  );
};

const Div = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 1rem;
`;
const Labels = styled.label`
  text-align: center;
  width: 300px;
  margin: 1rem auto;
  padding: 8px;
`;
const Label = styled.label`
  text-align: center;
  width: 300px;
  margin: 1rem auto;
  background-color: #eee;
  padding: 8px;
`;
const Input = styled.input`
  margin: 0 10px;
`;
const Span = styled.span``;
const Button = styled.button`
  background: #db7093;
  border-radius: 4px;
  border: 2px solid #db7093;
  color: #fff;
  margin: 4px 0;
  text-align: right;
  padding: 0.25em 1em;
`;
const DIV = styled.div``;
export default BulkDelete;
