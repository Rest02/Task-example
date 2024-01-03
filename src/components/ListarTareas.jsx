import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import { useContext } from 'react';

function ListarTareas() {
  
  const {tasks} = useContext(TaskContext)
  
  return (
    <div>
      {tasks.map((e) => (
        <TaskCard e = {e} key={e.id}/>
      ))}
    </div>
  );
}

export default ListarTareas;
