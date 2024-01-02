import ListarTareas from './components/ListarTareas'
import FormTarea from './components/FormTarea'
import React, { useEffect, useState } from "react";
import { tareas } from "./tareas";


function App() {


  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(tareas);
  },[]);


  function createTask(TaskNew){
    setTasks([...tasks, {
      titulo: TaskNew.title,
      id: tasks.length,
      descripcion: TaskNew.description
    }])
  }

  function deleteTask(taskID){
    setTasks(tasks.filter(tasks => tasks.id !== taskID))
  }

  return <div>
    <FormTarea createTask={createTask}/>
    <ListarTareas tasks = {tasks} deleteTask={deleteTask}/>
  </div>
}

export default App;

// const render = {
//   App: []
//   - TareasForm
//   - ListaTareas

// }
