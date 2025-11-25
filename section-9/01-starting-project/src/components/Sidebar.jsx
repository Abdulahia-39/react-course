const Sidebar = ({className, onSelect, addProject, projects, handleProjectIsSelected}) => {
    return (
        <div className={className}>
            <h1 className="text-2xl mb-12">Your projects</h1>
            <button className="bg-stone-600 text-gray-300 h-12 w-36 rounded-md" onClick={onSelect}>{addProject ? "Adding a project" : "+ Add a project"}</button>
            <ul className="mt-10">
                {projects.map((project) => 
                <li key={project.title}>
                    <button className="my-4 text-gray-300" onClick={() => handleProjectIsSelected(project.title, project.description, project.date)}>{project.title}</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar;