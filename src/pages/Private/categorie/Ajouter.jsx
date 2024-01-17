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
        if (categorieName != '' && position != '') {

            console.log('save')
            const data = {

                name : categorieName ,
                position : position ,

            } 
            // Formatage de la data sous forme d'objet
            await addDataToCollection("categorie" , data)

            // Remise à 0 du formulaire
            setCategorieName("") 
            setPosition("")
        
        } else {
            console.log('no save')
        }
    }
    

  return (
    <div>

      <input type='file'/>
      <input name='formCategorie' type='text' value={categorieName} onChange={handleChangeCategorie} placeholder='Saisir un titre'/>
      <input type='text' value={position} onChange={handleChangePosition}  placeholder='Saisir une position'/>
      <button onClick={save} type='submit'>Ajouter</button>

    </div>
  )
}

export default Ajouter