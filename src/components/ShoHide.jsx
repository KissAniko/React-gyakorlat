import React, { useState } from 'react'

const ShowHide = () => {

  const [latszik, setLatszik] = useState(true)

const change = () => {
  setLatszik (!latszik)
}


/*   Az alábbi sor ugyanaz, mint a felette lévő

function change (){
  setLatszik(!latszik)
}

*/
const hello = (i) => {console.log(i)}



  return (
    <div>

      {
          latszik ?
          <h1>Welcome!</h1> :
          <></>
      }
      <button onClick = { () => change ()}>Show/Hide</button>
    </div>
  )
}
export default ShowHide