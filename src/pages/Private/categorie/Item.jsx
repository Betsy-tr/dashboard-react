import React from 'react'

const Item = ({categorie}) => {
  return (
    <tr>
      <th></th>
      {/* <td><img src={categorie.image} alt="" /></td> */}
      <td>#</td>
      <td>{categorie?.name}</td>
      <td>{categorie?.position}</td>
      <td></td>
    </tr>
  )
}

export default Item