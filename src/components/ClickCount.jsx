import React, {useState, useEffect} from 'react'

const ClickCount = () => {

const[click, setClick] = useState(0)
const [sec, setSec] = useState(10)
const [intervalID, setIntervalID] = useState(null)

const Stop = () => {
   clearInterval(intervalID)
}

const Start = () => { 
   setIntervalID(
      setInterval(()=> {
                setSec (sec => sec -1)

                clearInterval()
     }, 1000) 
   )
}

/* az első kattintással indul el a visszaszámlálás */
const Click = () => {
  if (click === 0){
   Start()
  }
  setClick(click => click + 1)
}

useEffect(()=>{
   if(sec === 0){
      Stop()
   }
},[sec])


  return (
    <div className='container'>
                <h1>{click}</h1>
                <h3>Time left: {sec} sec</h3>
                {
                  sec > 0 ?
                  <button onClick={()=> { Click() }}>Click me!</button> :
                  <></>
                }
    </div>
  )
}

export default ClickCount