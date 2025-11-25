import ProjectsSideBar from "./components/ProjectsSidebar";
import NoProjectMenu from "./components/NoProjectMenu";
import { useState } from "react";
import AddProject from "./components/AddProject";
import Project from "./components/Project";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    addingProject: false,
    selectedProject: {},
    projects: []
  })

  function handlePages(){
    setProjectInfo(prevProj => {
      const newProj = {
        selectedProject: {},
        projects: [...prevProj.projects],
        addingProject: !prevProj.addingProject
      }
      return newProj;
    });
  }

  function handleProjectAdding(title, description, date){
    setProjectInfo(prevProj => {
      const newProj = {
        addingProject: !prevProj.addingProject,
        selectedProject: {...prevProj.selectedProject},
        projects: [...prevProj.projects, {
          title: title,
          description: description,
          date: date
        }]
      }
      // console.log(newProj);
      return newProj;
    })
  }

  function handleProjectIsSelected(title, description, date){
    setProjectInfo(prevProj => {
      const newProj = {
        addingProject: prevProj.addingProject,
        projects: [...prevProj.projects],
        selectedProject: {
          title: title,
          description: description,
          date: date
        }
      }
      return newProj;
    })
  }

  function handleDeleteProj(title){
    setProjectInfo(prevProj => {
      const newProj = {
        addingProject: prevProj.addingProject,
        selectedProject: {},
        projects: prevProj.projects.filter(project => project.title !== title)
      }
      return newProj;
    })
  }

  const noSelectedProjects = Object.keys(projectInfo.selectedProject).length === 0;

  return (
    <div className=" h-screen w-full flex flex-row ">
      <ProjectsSideBar className="w-1/3 bg-stone-900 text-white p-6 flex flex-col justify-start items-center rounded-r-lg rounded-br-none lg:w-1/4 md:w-1/3" projects={projectInfo.projects} onSubmit={handlePages} handleProjectIsSelected={handleProjectIsSelected}/>
      {!projectInfo.addingProject && noSelectedProjects && <NoProjectMenu className="w-3/4 flex flex-col justify-start items-center" onSubmit={handlePages}/>}
      {projectInfo.addingProject && <AddProject onSubmit={handlePages} handleProjectAdding={handleProjectAdding}/>}
      {!projectInfo.addingProject && !noSelectedProjects && <Project selectedProject={projectInfo.selectedProject} handleDeleteProj={handleDeleteProj}/>}
    </div>
  );
}

export default App;
