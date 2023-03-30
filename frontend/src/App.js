
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Inicio from "./view/Inicio"
import Blog from "./view/Blog"
import Grupos from "./view/Grupos" 
import NuestrosGrupos from './view/NuestrosGrupos';




function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="inicio" element={<Inicio />} />
        <Route path="grupos" element={<Grupos />} />
        <Route path="blog" element={<Blog />} />
        <Route path="nuestrosgrupos" element={<NuestrosGrupos />} />


      </Routes>
    </div>
  );
}

export default App;
