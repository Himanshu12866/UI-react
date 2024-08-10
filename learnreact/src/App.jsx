import LoginComponent from './component/login.component'
import "./component/login.component.css";
import "./component/input.component.css";
import "../src/App.css";

import InputBox from './component/input.component';
import DataBinding from './component/data';

function App() {
  return (
    <div className='container'>
      <LoginComponent />
      <InputBox />
      <DataBinding />
    </div>
  )
}

export default App
