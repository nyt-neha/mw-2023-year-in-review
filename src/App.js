import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourNYT from './pages/YourNYT';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="yournyt" element={<YourNYT />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
