import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>
        <Button>Home page</Button>
      </Link>
      <Link to={"/create-task"}>
        <Button>Create Task</Button>
      </Link>
      <Link to="/list-tasks">
        <Button>List Task</Button>
      </Link>
      <Link to={"/bulk-delete"}>
        <Button>Delete Task</Button>
      </Link>
    </>
  );
};

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Div = styled.div`
  text-align: center;
  width: calc(800px - 24px);
  margin: 0 auto;
  background: #f7f7f7;
  padding: 12px;
`;

export default Navbar;
