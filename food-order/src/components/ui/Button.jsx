export default function Button({ children, classNames, textOnly, ...props }) {
  let classses = textOnly ? "text-button" : "button";
  classses += " " + classNames;
  return (
    <button className={classses} {...props}>
      {children}
    </button>
  );
}
