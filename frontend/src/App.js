
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

import Estudiantes from './d-b/Estudiantes';
import Estudiant from './d-b/Estudiant';
import Start from "./d-b/Start"
import Acudientes from './d-b/Acudientes';



function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/grupos/*" element={<Grupos />} />
        <Route path="start" element={<Start />} />
        <Route path="/start/estudiantes" element={<Estudiantes />} />
        <Route path="/start/acudientes" element={<Acudientes />} />
        <Route path="/grupos/contemporaneo" element={<Contemporaneo />} />
        <Route path="/grupos/covers" element={<Covers />} />
        <Route path="/grupos/urbano" element={<Urbano />} />
        <Route path="/grupos/registro" element={<Registro />} />

        <Route path="/" exact component ={Estudiantes}/>
        <Route path='estudianteid/:id' component={Estudiant}/>
        <Route path='acudientes/:id' component={Acudientes}></Route>
      </Routes>


     
    </div>
  );
}

export default App;
