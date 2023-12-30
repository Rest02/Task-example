import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({title, descripcion});
    setTitle("")
    setDescripcion("")
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de tu tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value = {descripcion}
      ></textarea>
      <button>Enviar</button>
    </form>
  );
}

export default TaskForm;
