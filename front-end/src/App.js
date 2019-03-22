import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  
  const [projects, setProjects] = useState([])

  useEffect( () => {
    const fetchProjects = async () => {
      const res = await axios.get('http://localhost:3000/projects')
      console.log(res);
      setProjects(res.data)
    }
    fetchProjects();
  },[])

  return (
  <div className="App">
    {projects.map(project => (
      <div key={project.key}>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
  )
}

export default App;
