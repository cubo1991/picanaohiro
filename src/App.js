
import './App.css';
import { Diseño } from './Diseño/Diseño';
import { Animacion } from './Animacion/Animacion';
import { Fotografia } from './Fotografia/Fotografia';
import { Iluminacion } from './Iluminacion/Iluminacion';
import { Mapping } from './Mapping/Mapping';
import { Vjs } from './Vjs/Vjs';
import { Web } from './Web/Web';
import { NavBar } from './NavBar/NavBar';
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <h1>Titulo</h1>   
       <Routes>
      <Route exact path = '/'lo />
      <Route exact path ='/diseño' element={<Diseño/>}/>
      <Route exact path ='/fotografia' element={<Fotografia/>}/>
      <Route exact path ='/iluminacion' element={<Iluminacion/>}/>
      <Route exact path ='/mapping' element={<Mapping/>}/>
      <Route exact path ='/vjs' element ={<Vjs/>}/>
      <Route exact path ='/web' element ={<Web/>}/>
      <Route exact path ='/animacion' element={<Animacion/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
