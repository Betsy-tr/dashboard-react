import React, { useEffect, useState } from 'react'
import { getAll } from '../../../fonctionsjs/db'
import Item from './Item'


const Lister = () => {

  const [name , setName] = useState([])

  const initData = async () => { 

    const dataTemp = await getAll('DareOrTruth')
    setName(dataTemp)
  }

  useEffect(() => {

    initData()

  }, [])

  return (
    <div>
      <table>

        <thead>
          
          <th></th>
          <th className='font-serif text-[#14b0dd] text-2xl'>Catégories</th>
          <th className='font-serif text-[#14b0dd] text-2xl'>Titres</th>
          <th className='font-serif text-[#14b0dd] text-2xl'>Types</th>

        </thead>

        <tbody>

          {name?.map(data => <Item key={data.id} data={data}/>)}

        </tbody>

      </table> 
    </div>
  )
}

export default Lister