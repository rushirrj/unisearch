import "./App.css";
import NavBar from "./Components/NavBar";
import Home from './Components/Home'
import { Route, Routes } from "react-router-dom";
import Cards from './Components/Cards'

function App() { 

  return (
    <div className="App">

       <NavBar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="search" element={< Cards/>} />
       </Routes>
       {/* <Home/>  */}
      {/* <Cards/> */}


    </div>
  );
}

export default App;
