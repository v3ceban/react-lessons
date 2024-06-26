/* eslint-disable react/prop-types */
export default function Task(props) {
  return (
    <li className={props.done ? "completed" : ""}>
      {props.name}
      <button className="update" onClick={() => props.updateTask(props.id)}>
        {!props.done ? "V" : "O"}
      </button>
      <button className="delete" onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </li>
  );
}
