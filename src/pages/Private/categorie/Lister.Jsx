import React, { useEffect, useState } from 'react'
import { getAll } from '../../../fonctionsjs/db'
import Item from './Item'

const Lister = () => {
    const [categories, setCategories] = useState([])

    const initData = async () => { 
  
      const dataTemp = await getAll('categorie')
      setCategories(dataTemp)
  
    }
  
    useEffect(() => {
  
      initData()
      
    }, [])
    
  
    return (
        <div>
            <table>
        
                <thead>
        
                    <th></th>
                    <th className='font-serif text-[#14b0dd] text-2xl'>Images</th>
                    <th className='font-serif text-[#14b0dd] text-2xl'>Titres</th>
                    <th className='font-serif text-[#14b0dd] text-2xl'>Positions</th>
        
                </thead>
        
                <tbody>
        
                    {categories?.map(data => <Item key={data.id} categorie={data}/>)}
        
                </tbody>
        
            </table>
        </div>
    )
}

export default Lister