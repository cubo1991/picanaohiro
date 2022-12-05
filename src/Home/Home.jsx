import React from 'react'
import s from './Home.module.css'
import vertical from '../Assets/img/vertical.jpg'; 
import taka from '../Assets/img/taka.jpg'; 
import chipi from '../Assets/img/chipi.jpg'; 
import jrrpalermo from '../Assets/img/jrrpalermo.jpg'; 
import bombonera from  '../Assets/img/bombonera.jpg';
import pampa from  '../Assets/img/pampa.jpg';
import { Link } from 'react-router-dom';
import bocamc from  '../Assets/img/bocamc.png';
import riquelmemate from  '../Assets/img/riquelmemate.jpg';


export const Home = () => {
  return (
    <div>

<h1 className={s.title}> PICA AGENCIA INQUIETA </h1>

<div> 
  <Link to={'/fotografia'}>
  <img className={s.vertical} src= {vertical} alt={"imagen"}/>
  </Link>
<h2 className={s.subvertical}> FOTOGRAFIA</h2>
<p className={s.pvertical}> Las mejores fotos son nuestras</p>
</div>

<div> 
<Link to={'/diseño'}>
  <img className={s.imgdiseño} src= {taka} alt={"imagen"}/>
</Link>

<h2 className={s.subdiseño}> DISEÑO</h2>
<p className={s.pdiseño}>Diseños de la puta madre</p>
</div>

<div> 
  <Link to={'/mapping'}>
  <img className={s.imgmapping} src= {chipi} alt={"imagen"}/>
  </Link>

<h2 className={s.submapping}> MAPPING</h2>
<p className={s.pmapping}>Te proyectamos hasta tu futuro</p>
</div>

<div> 
  <Link to={'/web'}>
  <img className={s.imgweb} src= {jrrpalermo} alt={"imagen"}/>
  </Link>
<h2 className={s.subweb}> WEB</h2>
<p className={s.pweb}> La web que soñas aca</p>
</div>

<div> 
  <Link to={'/vjs'}>
  <img className={s.imgvjs} src= {bombonera} alt={"imagen"}/>
  </Link>
<h2 className={s.subvjs}> VJS</h2>
<p className={s.pvjs}> Aca iria un video?</p>
</div>

<div> 
  <Link to={'/iluminacion'}>
  <img className={s.imgiluminacion} src= {pampa} alt={"imagen"}/>
  </Link>

<h2 className={s.subiluminacion}> ILUMINACION</h2>
<p className={s.piluminacion}> Prende y apaga la tv</p>
</div>

<div> 
  <img className={s.imganimacion} src= {bocamc} alt={"imagen"}/>
<h2 className={s.subanimacion}> ANIMACION VIDEO</h2>
<p className={s.panimacion}> Animaniacs aca</p>
</div>

<div> 
  <img className={s.imgalgomas} src= {riquelmemate} alt={"imagen"}/>
<h2 className={s.subalgomas}> ALGO MAS ACA</h2>
<p className={s.palgomas}> Algo mas aca</p>
</div>




    </div>
  )
}
