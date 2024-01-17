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
    <div className='tableau'>
      <table className='table'>

        <thead>
          <tr>
          
            <th></th>
            <th className='titreTab'>Catégories</th>
            <th className='titreTab'>Titres</th>
            <th className='titreTab'>Types</th>

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