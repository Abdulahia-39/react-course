import Tasks from "./Tasks";

const Project = ({selectedProject, handleDeleteProj}) => {
    const date = new Date(selectedProject.date);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <section className="px-6 py-10 w-3/5">
            <div id="project-info" className="w-full border-b-gray-400 border-b-2">
                <div id="title" className="flex w-full justify-between mb-2">
                    <p className="text-3xl font-semibold">{selectedProject.title}</p>
                    <button onClick={() => handleDeleteProj(selectedProject.title)}>Delete</button>
                </div>

                <div id="date" className="mb-4">
                    <p className="text-gray-500">{formattedDate}</p>
                </div>

                <div id="description" className="mb-4">
                    <p>{selectedProject.description}</p>
                </div>
            </div>

            <Tasks />
        </section>
    )
}

export default Project;