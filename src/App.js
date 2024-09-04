import AddToDo from './components/AddToDo';
import Todos from './components/Todo';

function App() {
  return (
    <div className="text-center flex flex-col">
      <h1 className='text-violet-300 text-5xl'>TO-DO</h1>
      <hr />
      <AddToDo />
      <Todos />
    </div>
  );
}

export default App;
