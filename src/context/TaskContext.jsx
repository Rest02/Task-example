import React from 'react'
import {createContext} from 'react'
import { tareas } from "../tareas";
import { useState, useEffect } from "react";


export const TaskContext = createContext()


export function TaskContextProvider(props) {



    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      setTasks(tareas);
    }, []);
  
    function createTask(task) {
      setTasks([
        ...tasks,
        {
          titulo: task.title,
          descripcion: task.description,
          id: tasks.length,
        },
      ]);
    }
  
    function deleteTask(taskID) {
      setTasks(
        tasks.filter(function (tasks) {
          return tasks.id !== taskID;
        })
      );
    }







  return (
    <TaskContext.Provider value = {{
        tasks,
        createTask,
        deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

