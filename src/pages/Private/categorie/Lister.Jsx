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
        <div className='tableau'>
            <table className='table'>
        
                <thead>
                    <tr>
        
                        <th></th>
                        <th className='titreTab'>Images</th>
                        <th className='titreTab'>Titres</th>
                        <th className='titreTab'>Positions</th>

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