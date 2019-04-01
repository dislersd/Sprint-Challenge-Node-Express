import React, { useReducer } from "react";
import styled from "styled-components";

const AddProjectForm = styled.form`
  border: 2px solid black;
  width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  input {
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid red;
    font-size: 18px;
  }

  button {
    border: 1px solid #495267;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-family: helvetica, sans-serif;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
    display: inline-block;
    text-shadow: 0px 0px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    color: #ffffff;
    background-color: #606c88;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#606c88),
      to(#3f4c6b)
    );
    background-image: -webkit-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -moz-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -ms-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -o-linear-gradient(top, #606c88, #3f4c6b);
    background-image: linear-gradient(to bottom, #606c88, #3f4c6b);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#606c88, endColorstr=#3f4c6b);
  }
`;

// using arrow function - using mixed variety of function defs just to get practice -
const ProjectForm = props => {
  // const [projectName, setProjectName] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      projectName: "",
      projectDescription: ""
    }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
    // setProjectName(userInput.projectName);
    // setProjectDescription(userInput.projectDescription);
  };

  return (
    <div>
      <AddProjectForm
        onSubmit={e => props.handleSubmit(e, `${userInput.projectName}`, `${userInput.projectDescription}` )}
        autoComplete="off"
      >
        <input
          type="text"
          name="projectName"
          value={userInput.projectName}
          placeholder="Project Name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="projectDescription"
          value={userInput.projectDescription}
          placeholder="Project Description..."
          onChange={handleChange}
        />
        <button type="submit" value="add">
          {" "}
          Add{" "}
        </button>
      </AddProjectForm>
    </div>
  );
};

export default ProjectForm;
