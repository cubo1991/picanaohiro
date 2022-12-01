import React from 'react'
import s from './Home.module.css'
import vertical from '../Assets/img/vertical.jpg'; 

export const Home = () => {
  return (
    <div>

<h1> PICA AGENCIA INQUIETA </h1>

<img className={s.vertical} src= {vertical} alt={"imagen"}/>


    </div>
  )
}
