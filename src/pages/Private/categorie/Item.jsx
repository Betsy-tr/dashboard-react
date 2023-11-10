import React from 'react'

const Item = ({categorie}) => {
  return (
    <div className='tableau'>
      <tr>
        <th></th>
        {/* <td><img src={categorie.image} alt="" /></td> */}
        <td>#</td>
        <td className='dataTab'>{categorie?.name}</td>
        <td className='dataTab'>{categorie?.position}</td>
        <td></td>
      </tr>
    </div>
  )
}

export default Item