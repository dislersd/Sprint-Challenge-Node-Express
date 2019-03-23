import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//  components
import ProjectList from './components/ProjectList.js'
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("http://localhost:3000/projects");
      setProjects(res.data);
      console.log("useEffect ran");
    };
    fetchProjects();
  }, []);

  async function handleSubmit(e, projectName, projectDescription) {
    e.preventDefault();
    const newPost = {
      name: projectName,
      description: projectDescription
    }
    console.log(newPost)
    await axios.post('http://localhost:3000/projects', newPost);
    const res = await axios.get("http://localhost:3000/projects")
    setProjects(res.data)
    }

  async function removeProject(id) {
    await axios.delete(`http://localhost:3000/projects/${id}`);
    console.log('delete ran');
    const res = await axios.get("http://localhost:3000/projects")
    setProjects(res.data)
  }

  return projects.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="App">
      <ProjectForm handleSubmit={handleSubmit}/>
      <ProjectList projects={projects} remove={removeProject}/>
    </div>
  );
}

export default App;


// {projects.map(project => (
//   <div key={project.id}>
//     <p>Project: {project.name}</p>
//     <p>Description: {project.description}</p>
//     <button onClick={() => removeProject(project.id)}> x </button>
//     <hr />
//   </div>
// ))}
