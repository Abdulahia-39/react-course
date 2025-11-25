const Input = ({textarea, ref, type, label}) => {
    const classes = "bg-neutral-200 h-10 rounded-sm focus:outline-none focus:border-stone-800 border-b-2 ";

    return(
        <p className="flex flex-col mb-6">
                <label className="font-medium text-stone-800 mb-2">{label}</label>
                {textarea ? <textarea ref={ref} className={classes}/> : <input ref={ref} type={type} className={classes}/>}
        </p>
    )
}

export default Input;