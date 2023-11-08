import React from 'react'

const Item = ({categorie}) => {
  return (
    <tr>
      <th></th>
      {/* <td className='text-2xl'><img src={categorie.image} alt="" /></td> */}
      <td className='text-2xl'>#</td>
      <td className='font-serif text-black text-xl'>{categorie?.name}</td>
      <td className='font-serif text-black text-xl'>{categorie?.position}</td>
      <td></td>
    </tr>
  )
}

export default Item