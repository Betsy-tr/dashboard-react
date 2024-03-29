import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../fonctionsjs/auth'

const NavBar = () => {
  return (

    <aside>

        <div>

            <div>
                <h5>DASHBOARD</h5> 
            </div>

            <div>
                <img src='#'/>
                <div>
                    <h5>NOM</h5>
                    <h5>Prénom</h5>
                </div>
                
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
                    <li>
                        <button onClick={logout}>Déconnexion</button>
                    </li>
                </ul>
            </div>

        </div>

    </aside>
    
  )
}

export default NavBar


