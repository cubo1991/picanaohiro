
import './App.css';
import { Diseño } from './Diseño/Diseño';
import { Animacion } from './Animacion/Animacion';
import { Fotografia } from './Fotografia/Fotografia';
import { Iluminacion } from './Iluminacion/Iluminacion';
import { Mapping } from './Mapping/Mapping';
import { Vjs } from './Vjs/Vjs';
import { Web } from './Web/Web';
import { NavBar } from './NavBar/NavBar';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <h1>Titulo</h1>   
       <Routes>
      <Route path ='/Diseño' component={Diseño}/>
      <Route path ='/Fotografia' component={Fotografia}/>
      <Route path ='/Iluminacion' component={Iluminacion}/>
      <Route path ='/Mapping' component={Mapping}/>
      <Route path ='/Vjs' component ={Vjs}/>
      <Route path ='/Web' component ={Web}/>
      <Route path ='/Animacion' component ={Animacion}/>
        </Routes>
      </div>
    
  );
}

export default App;
