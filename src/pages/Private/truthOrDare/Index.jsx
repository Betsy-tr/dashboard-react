import React from 'react'
import Ajouter from './Ajouter'
import Lister from './Lister'

const Index = () => {
  return (
    <div className='section'>

      <h1 className='titleAouV'>AJOUTER UNE NOUVELLE ACTION OU VÉRITÉ</h1>
      <Ajouter/>
      <Lister/>

    </div>
  )
}

export default Index

