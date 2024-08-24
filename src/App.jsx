import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='hero-section'>
    <div className=' grid grid-cols-1 lg:grid-cols-2 container lg:w-[80%] w-11/12 gap-16 py-5 lg:p-20 mx-auto items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center lg:text-left text-white font-bold'>Learn to code by watching others</h1>
        <p className='text-white text-center lg:text-left'>see how developers solve problem in real-time. watching scripted tutorial is great, but understanding how developers think is invaluable</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='bg-[#6055a5] p-5 text-center px-8 rounded-md text-white'><p><b>Try it for free 7 days</b> then 20$/month, thereafter.</p> </div>
       <div className='bg-white flex flex-col gap-5 p-3 rounded-md'>
       <form className='flex flex-col gap-5 p-5 w-full'> 
          <input className='border border-gray-500 p-2 rounded-md' type="text"
           placeholder="First Name"
          />
           <input className='border border-gray-500 p-2 rounded-md' type="text"
           placeholder="Last Name"
          />
           <input className='border border-gray-500 p-2 rounded-md' type="Email address"
           placeholder="Email address"
          />
           <input className='border border-gray-500 p-2 rounded-md' type="Password"
           placeholder="password"
          /> 
        </form>
        <button className='bg-[#38cc8c] text-white p-2 rounded-md'>claim your free trial</button>
        <p className='text-center'>By clicking the button, you are agreeing to our <span className='text-red-900'>terms and services</span></p>
       </div>
      </div>
     </div>
    </div>
 
    </>
  )
}

export default App
