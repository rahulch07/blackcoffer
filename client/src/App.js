import "./App.css";
import Dashboard from "./components/DashBoard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Data from "./components/Data";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {

  const [mode,setMode] = useState('light');

  const handleMode =() =>{
    mode==='light' ? setMode('dark'):setMode('light');
  }

  let styl;
  let stylL= {bgclr:'whitesmoke',bgclr2:'white', txtclr:'black'};
  let stylD= {bgclr:'#35314f', bgclr2:'#28243d', txtclr:'white'};

  mode==='light'? styl=stylL: styl=stylD;

  return (
    <div className="App" style={{backgroundColor: styl.bgclr2, color:styl.txtclr, height:1150}}>
      <NavBar mode={mode} styl={styl} handleMode={handleMode} />

      <div style={{ display: "flex" }}>
        <div>
          <SideBar mode={mode} styl={styl}  />
        </div>
        <div>
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Home mode={mode} styl={styl} />} />
                <Route path="/data" element={<Data mode={mode} styl={styl} />} />
                <Route path="/dashboard" element={<Dashboard mode={mode} styl={styl} />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
