"use client";

import { useState } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => Promise<{ complete: boolean }>;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  const [checked, setChecked] = useState(complete);
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        checked={checked}
        onChange={(e) =>
          toggleTodo(id, e.target.checked).then((res) => {
            setChecked(res.complete);
          })
        }
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
