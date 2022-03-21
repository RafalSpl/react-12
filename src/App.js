import './App.css';
import {People} from "./data/People";
import {UsersList} from "./UsersList";

function App() {
  return (
    <div className="App">
      <UsersList list={People} />
    </div>
  );
}

export default App;
