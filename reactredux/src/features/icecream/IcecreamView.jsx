import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked  } from './icecreamSlice'

const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams)
  const dispatch = useDispatch() 
  return (
    <div>
        <h2>Number of Icecreams- {numOfIcecreams} </h2>
        <button onClick={() => dispatch(ordered()) }>Order Icecream</button>
        <input type="text" value={value} onChange = {(e) => setValue (parseInt (e.target.value))} />
        <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
    </div>
    
  )
}

export default IcecreamView