// import React from 'react'

export default function Jumbotron() {
  return (
    <div className='w-full max-h-screen flex items-center gap-2 p-2'>
      <div className="w-2/5">
        <img 
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1583391265517-35bbdad01209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
      </div>
      <div className="w-full">
        <video className='w-full object-cover bg-sky-950' src="/intro-presentacion.mp4" autoPlay loop muted />
      </div>
    </div>
  )
}