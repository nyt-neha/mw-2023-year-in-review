import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourNYT from './pages/YourNYT';
import './App.css';
import {StrictMode } from "react"; 
import logo from "./LogoWhite.png"

function App() {
  return (
    <>
    <img src={logo} alt="Logo" />

    <div className="App">
      <StrictMode> 

      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/yournyt' element={< YourNYT />}></Route>
    </Routes>
    </BrowserRouter>
    </StrictMode>
    </div>
    </>
  );
}

export default App;
