import Statetutorial from "./component/State.js";
import Todo from "./component/Todo.js";
function App() {
  return (
    <div>
      <h1>TO DO</h1>
      <Todo text="Learn JS" />
      <Todo text="Learn JS 2" />
      <Todo text="Learn JS 3" />
      <Statetutorial />
    </div>
  );
}

export default App;
