import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css';
import "./component/links.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Links from './component/links.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  <Links/>
  </React.StrictMode>,
)
