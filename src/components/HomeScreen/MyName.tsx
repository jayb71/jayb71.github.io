import React from 'react'
import './HomeScreen.css'

const MyName:React.FC =() => {
  return (
    <div className="items-center justify-center">
    <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    Jay Bharambe
  </span>
    <h1
        className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Jay Bharambe
    </h1>
</div>
  )
}

export default MyName