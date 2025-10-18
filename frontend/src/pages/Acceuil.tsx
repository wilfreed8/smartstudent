import React from 'react'

function Acceuil() {
  return (
    <div className='pt-15 '>
      <h1 className='text-5xl font-bold flex justify-center flex-wrap gap-y-7 font-f7'> Bienvenue sur la platemorme <i className='mx-5 text-success  font-f5'>Smart Student</i> Apprennez plus facilement avec L iA</h1>
      <div className="flex-wrap m-10 flex gap-5 items-center justify-center ">
       <button className='btn btn-ghost btn-primary rounded-2xl font-bold text-xl border-1 border-primary '>Acceuil</button>
       <button className='btn btn-ghost btn-success rounded-2xl font-bold text-xl border-1 border-success '>Cours</button>
       <button className='btn btn-ghost btn-info rounded-2xl font-bold text-xl border-1 border-info '>Chatbot</button>
        </div>
    </div>
  )
}

export default Acceuil
