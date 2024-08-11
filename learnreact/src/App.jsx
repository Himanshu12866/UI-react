// import LoginComponent from './component/login.component'
import "./component/login.component.css";
import "./component/input.component.css";
import "../src/App.css";
import LoadData from "./component/data3";
// import DataJSON from "./component/data2";

// import InputBox from './component/input.component';
// import DataBinding from './component/data';

function App() {
  return (
    <div className='container'>
      {/* <LoginComponent />
      <InputBox />
      <DataBinding /> */}
      {/* <DataJSON/> */}
      <LoadData />
    </div>
  )
}

export default App
