import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
 const [param] =  useSearchParams();
  console.log(param.get('v'));
  return (
    <div>Watch</div>
  )
}

export default Watch