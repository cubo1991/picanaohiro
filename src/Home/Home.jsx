import React from 'react'
import s from './Home.module.css'
import vertical from '../Assets/img/vertical.jpg'; 
import taka from '../Assets/img/taka.jpg'; 
import chipi from '../Assets/img/chipi.jpg'; 
import jrrpalermo from '../Assets/img/jrrpalermo.jpg'; 
import bombonera from  '../Assets/img/bombonera.jpg';
import pampa from  '../Assets/img/pampa.jpg';


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

<div> <img className={s.imgmapping} src= {chipi} alt={"imagen"}/>
<h2 className={s.submapping}> MAPPING</h2>
<p className={s.pmapping}>Te proyectamos hasta tu futuro</p>
</div>

<div> <img className={s.imgweb} src= {jrrpalermo} alt={"imagen"}/>
<h2 className={s.subweb}> WEB</h2>
<p className={s.pweb}> La web que soñas aca</p>
</div>

<div> <img className={s.imgvjs} src= {bombonera} alt={"imagen"}/>
<h2 className={s.subvjs}> VJS</h2>
<p className={s.pvjs}> Aca iria un video?</p>
</div>

<div> <img className={s.imgiluminacion} src= {pampa} alt={"imagen"}/>
<h2 className={s.subiluminacion}> ILUMINACION</h2>
<p className={s.piluminacion}> Prende y apaga la tv</p>
</div>


    </div>
  )
}
