import logo from './logo.svg';
import './App.css';
import {ParentOne} from './ParentOne';
import {ChildOne} from './ChildOne';
import { GrandParent } from './GrandParent';
import {Parent} from './Parent';
function App() {
  return (
    <div className="App">
      <GrandParent /> 
    </div>
  );
}

export default App;
