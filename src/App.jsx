import ListarTareas from "./components/ListarTareas";
import FormTarea from "./components/FormTarea";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <FormTarea />
        <ListarTareas />
      </div>
    </div>
  );
}

export default App;

// const render = {
//   App: []
//   - TareasForm
//   - ListaTareas

// }
