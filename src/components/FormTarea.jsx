import React, { useState } from "react";

function FormTarea({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={eventHandler}>
      <input
        placeholder="Ingresa el titulo de tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Ingresa la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default FormTarea;
