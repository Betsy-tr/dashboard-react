import React, { useEffect, useState } from 'react'
import { getOneById } from '../../../fonctionsjs/db'


const Item = ({data}) => {

  const [categorie , setCategorie] = useState({})

  const getCategorie = async () => { 

    if (data.categorie != undefined) {
      
      const dataCategorie = await getOneById('categorie' , data.categorie)
      setCategorie(dataCategorie)

    }

  }

  useEffect(() => {

    getCategorie()
 
  }, [])

  return (
    <tr>
      <th></th>
      <td className='dataTab'>{categorie?.name}</td>
      <td className='dataTab'>{data?.title}</td>
      <td className='dataTab'>{data?.type}</td>
      <td></td>
    </tr>
  )
}

export default Item