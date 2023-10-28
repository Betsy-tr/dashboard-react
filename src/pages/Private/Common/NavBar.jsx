import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <ul>
        <li>
            <Link to='/'>
                <span>Home</span>
            </Link>
        </li>
        <li>
            <Link to='/categorie'>
                <span>Catégories</span>
            </Link>
        </li>
        <li>
            <Link to='/truthordare'>
                <span>Actions ou Vérités</span>
            </Link>
        </li>
    </ul>
  )
}

export default NavBar


