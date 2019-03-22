import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      {projects.map(project => (
        <div key={project.id}>
          <p>Project: {project.name}</p>
          <p>Description: {project.description}</p>
          <button onClick={() => removeProject(project.id)}> x </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
