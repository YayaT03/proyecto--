
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Inicio from "./view/Inicio"
import Blog from "./view/Blog"
import Grupos from './view/Grupos'



import { Registro } from './view/Registro';
import Covers from "./view/Covers";
import Contemporaneo from "./view/Contemporaneo";
import Urbano from "./view/Urbano";

import Base from './view/Base';
import Estudiant from './view/Estudiant';




function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/grupos/*" element={<Grupos />} />
        <Route path='base'element={<Base/>}/>
        <Route path="/grupos/contemporaneo" element={<Contemporaneo />} />
        <Route path="/grupos/covers" element={<Covers />} />
        <Route path="/grupos/urbano" element={<Urbano />} />
        <Route path="/grupos/registro" element={<Registro />} />

        <Route path="/" exact component ={Base}/>
        <Route path='estudianteid/:id' component={Estudiant}/>
      </Routes>


     
    </div>
  );
}

export default App;
