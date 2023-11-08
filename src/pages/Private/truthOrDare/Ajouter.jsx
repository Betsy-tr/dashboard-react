import React, { useEffect, useState } from 'react'
import { addDataToCollection, getAll } from '../../../fonctionsjs/db'

const Ajouter = () => {

  const [name , setName] = useState("");
  const [categories , setCategories] = useState([])
  const [selectedCategorie , setSelectedCategorie] = useState("")
  const [selectedDareOrTruth , setSelectedDareOrTruth] = useState("")

  const handleChangeName = (event) => { 

    setName(event.target.value)

  }

  const handleDropCategorie = (event) => { 

    setSelectedCategorie(event.target.value)

  }

  const handleDropDareOrTruth = (event) => {

    setSelectedDareOrTruth(event.target.value)

  }

  const save = async () => { 

    if (name != '' && selectedCategorie != '') {

      console.log('save')

      const data = {
        categorie : selectedCategorie ,
        title : name , 
        type : selectedDareOrTruth
      }
      await addDataToCollection("DareOrTruth" , data)

      setName("")

    }else{

      console.log('no save')
    }

  }

  const initData = async () => { 

    const dataTemp = await getAll('categorie')
    setCategories(dataTemp)
  }

  useEffect(() => {

    initData()

  }, [])


  return (
    <div>

      <select value={selectedCategorie} onChange={handleDropCategorie}>
        <option defaultValue={''}>Sélectionner une catégorie</option>
        {categories?.map(data =><option key={data.id} value={data.id} className='font-serif text-black text-sm'>{data.name}</option>)}
      </select> 

      <select value={selectedDareOrTruth} onChange={handleDropDareOrTruth}>
        <option defaultValue={''}>Sélectionner un type</option>
        <option value={'action'}>Action</option>
        <option value={'vérité'}>Vérité</option>
      </select> 

      <input type='text' value={name} onChange={handleChangeName} placeholder='Saisir un titre'/>
      <button type='submit' onClick={save}>Ajouter</button>

    </div>
  )
}

export default Ajouter
