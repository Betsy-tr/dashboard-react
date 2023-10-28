import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Categorie from './Categorie'
import TruthOrDare from './TruthOrDare'
import NavBar from './Common/NavBar'

const Index = () => {
  return (
    <div>
      <NavBar/>

      <Routes>

        <Route index element={<Home/>}/>
        <Route path='/categorie' element={<Categorie/>}/>
        <Route path='/truthordare' element={<TruthOrDare/>}/>

      </Routes>
    </div>
  )
}

export default Index




