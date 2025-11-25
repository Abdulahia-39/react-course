import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";

const Modal = ({children, ref, label, className={}}) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="py-8 px-14 bg-stone-900 rounded-md text-stone-200 backdrop:bg-stone-900/90">
            {children}
            <form action="dialog">
                <button className="my-8 bg-stone-700 py-2 px-4 rounded-md">{label}</button>
            </form>
        </dialog>
    , document.getElementById("modal-root"))
}

export default Modal;