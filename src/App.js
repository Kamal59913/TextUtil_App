import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About'
import { BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  const [darkLightMode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(darkLightMode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled","info");
      document.title = 'TextUtils - Dark Mode'
      
     // Evil App: 
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      },2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      },1500);
  
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "White"
      showAlert("Light mode has been enabled","info");
      document.title = 'TextUtils - Light Mode'

    }

  }

  return (
    <> 
    <BrowserRouter>
    
    <Navbar title="TextUtils2" mode={darkLightMode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element ={
       <div className="container my-3">      
      <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={darkLightMode}/>
      </div>
      }/>
      <Route path='/about' element={<About/>}/>   
    </Routes>
    </BrowserRouter>
    
    </>
  );
}
export default App;
