import React from 'react'

const Ajouter = () => {
  return (
    <div>

      <select>
        <option>Sélectionner une catégorie</option>
      </select> 
      <select>
        <option>Sélectionner un type</option>
      </select> 
      <input type='text' placeholder='Saisir un titre'/>
      <button type='submit'>Ajouter</button>

    </div>
  )
}

export default Ajouter
