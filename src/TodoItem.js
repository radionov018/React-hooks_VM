import React, { useContext } from "react";
import Context from "./context";

export default function TodoItem({ title, id, completed }) {
  const { removeTodo, toggleTodo } = useContext(Context);

  const classesCss = ["todo"];

  if (completed) {
    classesCss.push("completed");
  }

  return (
    <li className={classesCss.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
