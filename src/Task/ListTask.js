import { useEffect, useState } from "react";
import styled from "styled-components";
import { emptyList } from "../constants";
import { getItem } from "../utilities";
// import "./ListTasks.css";

const ListTasks = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(getItem("taskList"));
  }, []);

  return (
    <Main className="row">
      {taskList?.length > 0 ? (
        taskList?.map((task) => (
          <Card key={task.id}>
            <Center>{task.name}</Center>
          </Card>
        ))
      ) : (
        <Div>{emptyList}</Div>
      )}
    </Main>
  );
};

const Main = styled.main`
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin : 0 auto;
`;
const Div = styled.div`
  text-align: center;
  width: 100%;
  margin: 3rem 0;
`;
const Card = styled.div`
  background: #d7d2d4;
  border-radius: 4px;
  color: #000;
  flex: 0 0 32%;
  max-width: 32%;
  margin: 8px auto;
  text-align: center;
  height: 120px;
  
`;
const Center = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  height: 100%;
  
`;
export default ListTasks;
