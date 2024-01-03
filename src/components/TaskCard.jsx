import React, { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard({e}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div>
      <h1>{e.titulo}</h1>
      <p>{e.descripcion}</p>
      <button onClick={() => deleteTask(e.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
