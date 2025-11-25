import noProjectIMG from "../assets/no-projects.png";

const MainBody = ({className, onSelect}) => {
    return (
        <div className={className + " flex flex-col justify-start items-center"}>
            <img src={noProjectIMG} alt="" className="w-20 mt-20"/>
            <h2 className="text-xl text-stone-800 font-semibold mt-4">No projects are selected yet!!</h2>
            <p className="text-gray-600 mt-4">Select a project or get started with a new one</p>
            <button className="w-44 h-10 mt-6 bg-stone-600 rounded-md text-gray-300" onClick={onSelect}>create a new project</button>
        </div>
    )
}

export default MainBody;