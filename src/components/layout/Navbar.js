import React from 'react';
import {Link} from 'react-router-dom';
import Container from './Container'

import styles from './Navbar.module.css'
import logo from './../../img/costs.png'

const Navbar = () => {
  return (
    <nav>
        <Container>
         <Link to="/">
            <img src={logo} alt=''></img>
         </Link>   
         <Link to="/">Home</Link>
         <Link to="/contact">Contato</Link>
         <Link to="/company">Company</Link>
         <Link to="/newproject">Novo projeto</Link>
        </Container>
    </nav>
  )
}

export default Navbar
