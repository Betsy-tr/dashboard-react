import React, { useState } from 'react'
import { addDataToCollection } from '../../../fonctionsjs/db'


const Ajouter = () => {

  const [categorieName, setCategorieName] = useState("")
  const [position, setPosition] = useState("")

  const handleChangeCategorie = (event) => { 

    setCategorieName(event.target.value)

  }

  const handleChangePosition = (event) => { 

    setPosition(event.target.value)

  }

  const save = async () => { 

    if (categorieName != '') {

      console.log('save')
      const data = {

        name : categorieName ,
        position : position ,

      } // Formatage de la data sous forme d'objet
      await addDataToCollection("categorie" , data)

      // Remise à 0 du formulaire
      setCategorieName("") 
      setPosition("")
      
    } else {
      
      console.log('no save')

    }

  }

  return (
    <div className='sectionAjouter'>

      <input className='inputImage' type='file'/>
      <input className='inputTitle' name='formCategorie' type='text' value={categorieName} onChange={handleChangeCategorie} placeholder='Saisir un titre'/>
      <input  className='inputPosition' type='text' value={position} onChange={handleChangePosition}  placeholder='Saisir une position'/>
      <button className='buttonAjouter' onClick={save} type='submit'>Ajouter</button>

    </div>
  )
}

export default Ajouter

