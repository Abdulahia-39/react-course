import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import { useState } from "react";

let projects = [];
let selectedProject = {};

function App() {
  const [projectIsSelected, setProjectIsSelected] = useState(false);
  const [addingProject, setAddProject] = useState(false);

  function handleProjectIsSelected(title, description, date){
    setProjectIsSelected(() => !projectIsSelected);
    selectedProject = {
       title: title,
       description: description,
       date: date
       };
  }
  // console.log(selectedProject);
  function handleAddingProject(){
    setAddProject(() => !addingProject);
  }

  function handleProjects(title, description, date) {
    projects.push({
      title: title,
      description: description,
      date: date
    });
    handleAddingProject();
    // console.log(projects);
  }
  

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Project Manager</h1>
      <div className=" h-screen w-full flex flex-row ">
        <Sidebar className="w-1/3 bg-stone-900 text-white p-6 flex flex-col justify-start items-center rounded-r-lg rounded-br-none lg:w-1/4 md:w-1/3" onSelect={handleAddingProject} addProject={addingProject} projects={projects} handleProjectIsSelected={handleProjectIsSelected}/>
        {!addingProject && !projectIsSelected && <MainBody className="w-3/4" onSelect={handleAddingProject}/>}
        {addingProject && <AddProject onSelect={handleAddingProject} onSubmit={handleProjects} handleProjectIsSelected={handleProjectIsSelected}/>}
        {projectIsSelected && !addingProject && <Project selectedProject={selectedProject}/>}
      </div>
    </>
  );
}

export default App;
