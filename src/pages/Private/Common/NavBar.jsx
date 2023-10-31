import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <aside>

        <div>

            <div>
                <h5>DASHBOARD</h5> 
            </div>

            <div>
                <img src='#'/>
                <h5>NOM Prénom</h5>
                <span>Admin</span>
            </div>

            <div>
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
            </div>

        </div>

    </aside>
    
  )
}

export default NavBar


