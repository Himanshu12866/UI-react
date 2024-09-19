// import LoginComponent from './component/login.component'
import "./component/login.component.css";
import "./component/input.component.css";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import DraggableBox from "./component/draggable";
// import MountDemo from "./component/mount/mount";
// import Captcha from "./component/captcha";
// import NavComponent from "./component/custom/useNav";
// import ReducerDemo from "./component/reducerDemo";
// import ExaClass from "./component/Classes/exaclass";
// import Reducerdemo1 from "./component/Classes/reducerdemo";

// import Node from "./component/context-demo/node";
// import ShopperApp from "./component/shopper";
// import ShopperApp from "./component/shopper";
// import GrandP from "./component/context/GrandP";
// import FormDemo6 from "./component/formdemo6";
// import FormDemo5 from "./component/formdemo5";
// import FormDemo2 from "./component/formValidation1";
// import FormDemo3 from "./component/formDemo3";
// import FormDemo4 from "./component/formikSpread";
// import FakeStoreApi from "./component/fakestoreaoi";
// import FormDemo from "./component/formdemo";
// import FormDemo1 from "./component/formDemo1";
// import FormReact from "./component/form";
// import FakeStore from "./component/FakeStore";
// import NASAapi from "./component/nasaapi";
// import "../src/App.css";
// import AxiosData from "./component/axios";

// import FetchData from "./component/course";
// import LoadData1 from "./component/data4";
// import LoadData from "./component/data3";
// import DataJSON from "./component/data2";

// import InputBox from './component/input.component';
// import DataBinding from './component/data';


function App() {
  return (
    <div>

      {/* <FakeStoreApi/> */}
      {/* <FormReact /> */}
      {/* <FormDemo /> */}
      {/* <FormDemo1/> */}
      {/* <FormDemo2/> */}
      {/* <FormDemo3/> */}
      {/* <FormDemo4 /> */}
      {/* <FormDemo5/> */}
      {/* <FormDemo6 /> */}
      {/* <GrandP /> */}
      {/* <ShopperApp /> */}

      {/* <Captcha/> */}
      {/* <Node /> */}
      {/* <MountDemo /> */}
      {/* <NavComponent/>
      <ReducerDemo/>
      <ExaClass/>
      <Reducerdemo1/> */}
      <BrowserRouter>
        <div className="route-exa">
          <nav className="navbar">
          <a className="navbar-brand">ShopperApp</a>
      
         
            <ol className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="men" className="nav-link" >Men Fashion</Link>
            </li>
            <li className="nav-item">
              <Link to="women" className="nav-link" >Wome Fashion</Link>
            </li>
            <li className="nav-item">
              <Link to="kids" className="nav-link" >Kids Fashion</Link>
            </li>
         

            </ol>
        

          </nav>
        </div>
        <div>
          <Routes>
        <Route path="/" element={<h1>Welcome To Fashion World</h1>} />
        <Route path="men" element={<h1>Mens Fashion</h1>} />
        <Route path="women" element={<h1>WoMens Fashion</h1>} />
        <Route path="kids" element={<h1>Kids Fashion</h1>} />
        <Route path="*" element={<h1>Sorry Your Request not found</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
