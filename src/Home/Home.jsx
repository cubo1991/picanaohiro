import React from 'react'
import s from './Home.module.css'
import vertical from '../Assets/img/vertical.jpg'; 
import taka from '../Assets/img/taka.jpg'; 
import { Link } from 'react-router-dom';




export const Home = () => {
  return (
    <div>

<h1 className={s.title}> PICA AGENCIA INQUIETA </h1>

<div> 
  <Link to={'/fotografia'}>
  <img className={s.vertical} src= {vertical} alt={"imagen"}/>
  </Link>
<h2 className={s.subvertical}> FOTOGRAFIA</h2>
<p className={s.pvertical}> las mejores fotos son nuestras</p>
</div>

<div> 
<Link to={'/diseño'}>
  <img className={s.imgdiseño} src= {taka} alt={"imagen"}/>
</Link>

<h2 className={s.subdiseño}> DISEÑO</h2>
<p className={s.pdiseño}>diseños de la puta madre</p>

</div>
    </div>
  )
}
