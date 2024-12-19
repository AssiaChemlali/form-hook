import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
const {register,handleSubmit}=useForm()
 
const onSubmit= data=>{
  console.log('data',data)
}
  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className='flex flex-col p-10 gap-2 bg-gray-100'>
     <label >UserName</label>
     <input {...register('username')}  type="text"  className='border p-2'/>

     <label>Email</label>
     <input  {...register('email')}type="email" className='border p-2'/>

     <label>Password</label>
     <input {...register('password')} type="password" className='border p-2' />

     <button type='submit' className='bg-blue-500 text-white p-2 font-bold mt-4'>Register</button>

    </form>
  )
}

export default App
