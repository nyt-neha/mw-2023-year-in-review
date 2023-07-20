import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourNYT from './pages/YourNYT';
import Startup from './pages/Startup';
import TopLists from './pages/TopLists';
import './App.scss';
import {StrictMode } from "react"; 
import logo from "./LogoWhite.png"
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
    <div className="header">
      <img src={logo} alt="Logo" />
    </div>

    <div className="App">
      <StrictMode> 

      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Startup />}></Route>
        <Route exact path='/yournyt' element={< YourNYT />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/toplists' element={< TopLists />}></Route>
      </Routes>
      </BrowserRouter>
      </StrictMode>
    </div>
    <UserProfile/>
    </>
  );
}

export default App;
