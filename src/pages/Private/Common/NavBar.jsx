import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/avatar.png'

const NavBar = () => {
  return (

    <aside>

        <div>

            <div>
                <h5 className='titleMenu'>DASHBOARD</h5> 
            </div>

            <div className='card-user'>
                <img src={avatar}/>
                <div className='card-info'>
                    <h5 className='info'>NOM</h5>
                    <h5 className='info'>Prénom</h5>
                </div>
                
                <span className='poste'>Admin</span>
            </div>

            <div className='liens'>
                <ul>
                    <li>
                        <Link to='/'>
                            <span className='route'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/categorie'>
                            <span className='route'>Catégories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/truthordare'>
                            <span className='route'>Actions ou Vérités</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>

    </aside>
    
  )
}

export default NavBar


