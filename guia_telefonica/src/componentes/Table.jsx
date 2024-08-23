import { useState } from 'react'


function Table() {
const [nombre, setnombre] = useState('')

  return (
    
    <table>
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">surname</th>
      <th scope="col">age</th>
      <th scope="col">tel</th>
      <th scope='col'>accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mercury</th>
      <td>4,880</td>
      <td>0.39</td>
      <td>88</td>
    </tr>

  </tbody>
</table>
  )
}

export default Table;
