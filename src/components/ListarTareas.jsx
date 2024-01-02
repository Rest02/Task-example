import CardTask from "./CardTask";

function ListarTareas({ tasks, deleteTask }) {

  if(tasks.length == 0){
    return <h1>No hay datos...</h1>
  }

  return (
    <div>
      {tasks.map((e) => (
        <CardTask e={e} key={e.id} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default ListarTareas;
