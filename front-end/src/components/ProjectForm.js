import React, { useReducer } from "react";
import styled from "styled-components";

const AddProjectForm = styled.form`
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 10px;

  input[type="text"] {
    background-color: transparent;
    border: 0;
    border-bottom: solid 1px #0c1416;
    width: 70%;
    padding-bottom: 4px;
    color: #99999;
    font-weight: lighter;
    letter-spacing: 2px;
    margin-bottom: 30px;
    font-size: 20px;
  }

  input[type="text"] {
    outline: none;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #2c3e50 inset;
    -webkit-text-fill-color: #fff;
  }

  button {
    border: 0;
    padding: 8px 10%;
    margin: 0 10px;
    border-radius: 2px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: #51f1c1;
    color: rgb(27, 23, 20);
    width: 80%;
    margin: 0 auto;
  }

  button:active {
    outline: none;
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
    transition: all 0.5s ease;
  
      &:hover {
        background-color: red;
      }
  }
`;

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
        onSubmit={e =>
          props.handleSubmit(
            e,
            `${userInput.projectName}`,
            `${userInput.projectDescription}`
          )
        }
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
