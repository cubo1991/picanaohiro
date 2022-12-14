import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavBar.module.css'
import Facebook from '../Assets/facebook.png'
import Instagram from '../Assets/instagram.png'

export const NavBar = () => {
  return (
    <div className={s.position}>
    <div className='container d-flex flex-column flex-md-row'>
<nav className={`navbar navbar-expand-xl navbar-dark d-flex flex-md-column desktop ${s.marco} ${s.desktop}` }>
  <Link to={'/'}> LOGO
    </Link>
    <button class="btn btn-danger-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

    <div className='collapse navbar w-100' id= 'navbarSupportedContent'>
     <ul className='navbar-nav w-100 d-flex flex-md-column text-center text-md-end'>
    <Link to={'/diseño'} >
    <li className='nav-link' aria-current='page'>Diseño</li>
    </Link>
    <Link to={'/fotografia'} >
    <li className='nav-link'>Fotografia</li>
    </Link>
    <Link to={'/iluminacion'} >
    <li className='nav-link'>Iluminacion</li>
    </Link>
    <Link to={'/mapping'} >
    <li className='nav-link'>Mapping</li>
    </Link>
    <Link to={'/vjs'} >
    <li className='nav-link'>Vjs</li>
    </Link>
    <Link to={'/web'} >
    <li className='nav-link'>web</li>
    </Link>
    <Link to={'/animacion'} >
    <li className='nav-link'>Animación</li>
    </Link>
    <li className='nav-link'> <a href='https://www.facebook.com/profile.php?id=100071396000140'><img src={Facebook} alt='Facebook'/></a></li>
   <li className='nav-link'> <a href='https://www.instagram.com/pica.mza/'><img src={Instagram} alt='Instagram'/></a></li>
    </ul>

    </div>


</nav>














    </div>
    </div>
  )
}
