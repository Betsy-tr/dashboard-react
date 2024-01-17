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
          <tr>
          
            <th></th>
            <th>Catégories</th>
            <th>Titres</th>
            <th>Types</th>

          </tr>
        </thead>

        <tbody>

          {name?.map(data => <Item key={data.id} data={data}/>)}

        </tbody>

      </table> 
    </div>
  )
}

export default Lister