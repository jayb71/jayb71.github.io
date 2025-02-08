import React from 'react'
import './HomeScreen.css'

const MyPhoto:React.FC =() => {
  return (
    <div className="flex justify-center items-center">
      <img src="jay.jpg" alt="Jay Bharambe" className="rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40"></div>
    </div>
  )
}

export default MyPhoto