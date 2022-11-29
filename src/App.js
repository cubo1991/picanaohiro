import logo from './logo.svg';
import './App.css';
import { Diseño } from './Diseño/Diseño';
import { Animacion } from './Animacion/Animacion';
import { Fotografia } from './Fotografia/Fotografia';
import { Iluminacion } from './Iluminacion/Iluminacion';
import { Mapping } from './Mapping/Mapping';
import { Vjs } from './Vjs/Vjs';
import { Web } from './Web/Web';

function App() {
  return (
    <div>
      
      <h1>Titulo</h1>
      <Diseño/>
      <Animacion/>
      <Fotografia/>
      <Iluminacion/>
      <Mapping/>
      <Vjs/>
      <Web/>
      
      </div>
    
  );
}

export default App;
