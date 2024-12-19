import { useState } from 'react'
import './App.css'

function App() {

  return (
    <form className='flex flex-col p-10 gap-2 bg-gray-100'>
     <label >UserName</label>
     <input type="text"  className='border p-2'/>

     <label>Email</label>
     <input type="email" className='border p-2'/>

     <label>Password</label>
     <input type="password" className='border p-2' />

     <button type='submit' className='bg-blue-500 text-white p-2 font-bold mt-4'>Register</button>

    </form>
  )
}

export default App
