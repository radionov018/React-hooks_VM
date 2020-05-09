import React, { useState } from "react";

export default function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const classesCss = ["todo"];

  if (checked) {
    classesCss.push("completed");
  }

  return (
    <li className={classesCss.join(" ")}>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>

        <i className="material-icons red-text">delete</i>
      </label>
    </li>
  );
}
