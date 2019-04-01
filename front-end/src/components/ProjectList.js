import React from "react";
import styled from 'styled-components';
//css
const ProjectsWrapper = styled.div `
width: 90%;
max-width: 600px;
margin: 20px auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 10px;
height: 100vh;
background-color: #f8f8f8;
border-radius: 50px;
`

const Project = styled.div `
 color: #3e4a5f;
 
`

function ProjectList(props) {
  return (
    <ProjectsWrapper>
    <h2> Projects:</h2>
      {props.projects.map(project => (
        <Project key={project.id}>
          <p>Project: {project.name}</p>
          <p>Description: {project.description}</p>
          <button onClick={() => props.remove(project.id)}> x </button>
        </Project>
      ))}
    </ProjectsWrapper>
  );
}

export default ProjectList;
