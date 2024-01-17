import React from 'react'

const Item = ({categorie}) => {
  return (
    <div>
      <tr>
        <th></th>
        {/* <td><img src={categorie.image} alt="" /></td> */}
        <td>#</td>
        <td>{categorie?.name}</td>
        <td>{categorie?.position}</td>
        <td></td>
      </tr>
    </div>
  )
}

export default Item