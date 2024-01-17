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
                    <tr>
        
                        <th></th>
                        <th>Images</th>
                        <th>Titres</th>
                        <th>Positions</th>

                    </tr>
                </thead>
        
                <tbody>
        
                    {categories?.map(data => <Item key={data.id} categorie={data}/>)}
        
                </tbody>
        
            </table>
        </div>
    )
}

export default Lister