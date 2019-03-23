import React, { useReducer } from "react";
import styled from 'styled-components'
import Axios from "axios";

const AddProjectForm = styled.form `
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
`

// using arrow function - using mixed variety of function defs just to get practice -
const ProjectForm = () => {
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

  // async function handleSubmit(e) {
  // e.preventDefault();
  // await axios.post('http://localhost:3000/projects', )

    
  // }

  return (
    <div>
      <AddProjectForm 
      //onSubmit={handleSubmit}
      autoComplete="off"
      >
        <label> Project Name: </label>
        <input
          type="text"
          name="projectName"
          value={userInput.projectName}
          placeholder="Project Name..."
          onChange={handleChange}
        />
        <label> Project Description: </label>
        <input
          type="text"
          name="projectDescription"
          value={userInput.projectDescription}
          placeholder="Project Description..."
          onChange={handleChange}
        />
        <button type="submit" value="add"> Add </button>
      </AddProjectForm>

    </div>
  );
};

export default ProjectForm;
