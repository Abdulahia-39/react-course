import { useRef } from "react";

const AddProject = ({onSelect, onSubmit, handleProjectIsSelected}) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();

    return (
        <div className="w-3/5 ml-6 my-10 mr-28">
            <div className="flex justify-end px-4 md:px-28">
                <button className="mr-6" onClick={() => {onSelect(); handleProjectIsSelected();}}>Cancel</button>
                <button className="bg-stone-900 text-white w-20 h-10 rounded-md" onClick={() => onSubmit(title.current.value, description.current.value, date.current.value)}>Save</button>
            </div>
            <form className="w-full px-4 md:px-28">
                <p className="flex flex-col mb-6">
                    <label htmlFor="title" className="font-medium text-stone-800 mb-2">Title</label>
                    <input ref={title} type="text" id="title" className="bg-neutral-200 h-10 rounded-sm focus:outline-none border-stone-800 border-b-2 "/>
                </p>
                <p className="flex flex-col mb-6">
                    <label htmlFor="description" className="font-medium text-stone-800 mb-2">Descripton</label>
                    <textarea ref={description} name="" id="description" className="bg-neutral-200 rounded-sm focus:outline-none border-stone-800 border-b-2 "></textarea>
                </p>
                <p className="flex flex-col">
                    <label htmlFor="duedate" className="font-medium text-stone-800 mb-2">Due Date</label>
                    <input ref={date} type="date" name="" id="duedate" className="bg-neutral-200 h-10 rounded-sm focus:outline-none border-stone-800 border-b-2 "/>
                </p>
            </form>
        </div>
    )
}

export default AddProject;