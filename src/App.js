// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light');
   const [textcolor, settextcolor] = useState('dark')
   const [alert,setAlert] = useState(null);
   const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

   
   function togglemode() {
    if (mode === 'light') {
      setMode('dark');
      settextcolor('light')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled","success");
      document.title="Textutils-Darkmode"
    } else {
      setMode('light');
      settextcolor('dark')
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
      document.title="Textutils-Lightmode"
    }
   }
  return (
    <>
        
   
    <BrowserRouter>
    <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode} textcolor={textcolor}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" textcolor={textcolor} mode={mode}/>
} />
        <Route path="about/*" element={<About />} />
      </Routes>
        </div>
    </BrowserRouter>
 
  </>
   );
}

export default App;

 