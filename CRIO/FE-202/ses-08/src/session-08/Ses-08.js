import React from 'react'

const A = ({text}) =>{
    console.log("A component got rendered")
  return (
    <div>Ses-08:{text}</div>
  )
}

const OptimizedA = React.memo(A)
export default OptimizedA