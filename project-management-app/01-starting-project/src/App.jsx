import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const mainStyle = "h-screen my-8 flex gap-8";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  let projectCount = 0;

  function onSelectProject(project) {
    setSelectedProject(project);
  }

  function handleSaveProject(newProject) {
    if (newProject.id >= 0) {
      const nextProjects = projects.map((project, projectId) => {
        if (projectId === newProject.id) {
          return newProject;
        } else {
          return project;
        }
      });
      setProjects(nextProjects);
    } else {
      newProject = {
        ...newProject,
        id: projectCount++,
      };
      setProjects((prev) => {
        return [...prev, newProject];
      });
    }
  }

  function resetSelection() {
    setSelectedProject(null);
  }

  return (
    <>
      <main className={mainStyle}>
        <Sidebar
          projects={projects}
          onCreateProject={handleSaveProject}
          onSelectProject={onSelectProject}
          selected={selectedProject}
        />
        <Content
          saveProject={handleSaveProject}
          project={selectedProject}
          onResetSelection={resetSelection}
        />
      </main>
    </>
  );
}

export default App;
