import {ListaTareas} from "./components/Tasklist"
import TaskForm from "./components/TaskForm"
import { Tasks as data } from "./data/Tasks";
import { useState ,useEffect} from "react";

export function App() {

  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task){
    setTasks([...Tasks, {
      id: Tasks.length,
      titulo: task.title,
      descripcion: task.descripcion
    } ])
  }

  function deleteTask(taskId){
    setTasks(Tasks.filter(task => task.id !== taskId))
  }


  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <ListaTareas tasks = {Tasks} deleteTask = {deleteTask}/>
    </div>
  );
}
