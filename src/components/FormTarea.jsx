import React, { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'


function FormTarea() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

    const eventHandler = (e)=>{
        e.preventDefault()
        const newTask = {
            title, 
            description
        }
        createTask(newTask)
        setTitle("")
        setDescription("")
    }

  return (
    <form onSubmit={eventHandler}>
      <input
        placeholder="Ingresa tu titulo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Ingresa la descripcion de tu tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default FormTarea;
