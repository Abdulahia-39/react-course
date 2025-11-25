import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const AddProject = ({onSubmit, handleProjectAdding}) => {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    let enteredTitle;
    let enteredDescription;
    let enteredDate;

    function saveProject(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if(enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDate.trim() === ''){
            //show modal
            modal.current.open();
            return;
        }

        handleProjectAdding(enteredTitle, enteredDescription, enteredDate);
    }

    return (
        <>
            <Modal ref={modal} label="Okay">
                <h2 className="text-2xl font-bold mb-2">...OOPs</h2>
                <p>Seems like you left an empty input field</p>
                <p>Make sure to fill every input..</p>
            </Modal>
            <div className="w-3/5 ml-6 my-10 mr-28">
                <div className="flex justify-end px-4 md:px-28">
                    <button className="mr-6" onClick={onSubmit}>Cancel</button>
                    <button className="bg-stone-900 text-white w-20 h-10 rounded-md" onClick={saveProject}>Save</button>
                </div>
                <form className="w-full px-4 md:px-28">
                    <Input ref={title} type="text" label="Title"/>
                    <Input ref={description} textarea label="Description"/>
                    <Input ref={date} type="date" label="Date"/>
                </form>
            </div>
        </>
    )
}

export default AddProject;