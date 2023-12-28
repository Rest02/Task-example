import { useState, useEffect } from "react";
import { Tasks as data } from "./Tasks";

export function ListaTareas() {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {Tasks.map((task) => (
        <div key = {task.id}>
          <h1>{task.titulo}</h1>
          <p>{task.estado}</p>
        </div>
      ))}
    </div>
  );
}
