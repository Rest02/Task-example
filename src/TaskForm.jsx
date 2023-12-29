import { useState} from "react";



function TaskForm({createTask}) {

    const [title, setTitle] = useState("")

    const handlerSubmit = (e) => {
        e.preventDefault(); 
        createTask(title)
    }


  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
}

export default TaskForm;
