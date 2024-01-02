import React from "react";

function CardTask({ e, deleteTask }) {
  return (
    <div key={e.id}>
      <h1>{e.titulo}</h1>
      <p>{e.descripcion}</p>
      <button onClick={() => deleteTask(e.id)}>Eliminar tarea</button>
    </div>
  );
}

export default CardTask;
