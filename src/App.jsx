
import './App.css'
import { useForm  } from 'react-hook-form'
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import axios from 'axios'
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'

function App() {
  
  const {register, handleSubmit, reset, formState:{errors}} =useForm()

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  

const baseUrl = import.meta.env.VITE_BASE_URL;
// console.log(baseUrl);

  const submitForm = async(data) =>{
    // console.log(data);
    try {
      setLoading(true)
      const res = await axios.post(`${baseUrl}`, data)
      // console.log(res);

      if(res.status === 201){
        setLoading(false)
        toast.success("Registration Succesful")
        reset()
      }

      if (res.status !== 201){
        setLoading(false)
        toast.error("something went wrong")
      }
    } catch (error) {
      // console.log(error);
      // toast.error("something went wrong")
    }

  }

  const handleClick =()=>{
    setShowPassword(!showPassword)
  }

  const passwordType = showPassword ? "text" : "password"



  return (
    <>
    <Toaster position='top-center'/>
    <div className='hero-section'>
    <div className=' grid grid-cols-1 lg:grid-cols-2 container lg:w-[80%] w-11/12 gap-16 py-5 lg:p-20 mx-auto items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center lg:text-left text-white font-bold'>Learn to code by watching others</h1>
        <p className='text-white text-center lg:text-left'>see how developers solve problem in real-time. watching scripted tutorial is great, but understanding how developers think is invaluable</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='bg-[#6055a5] p-5 text-center px-8 rounded-md text-white'><p><b>Try it for free 7 days</b> then 20$/month, thereafter.</p> </div>
       <div className='bg-white flex flex-col gap-5 p-3 rounded-md'>
       <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-5 p-5 w-full'> 
          <input
          {...register("firstname",{
            required: "Firstname is required"
          })}
          className={`border ${errors.firstname ? 'border-red-500' : 'border border-gray-500'} outline-none p-2 rounded-md`} type="text"
           placeholder="First Name"
          />
          {errors.firstname && <p className='text-red-500 font-semibold'>{errors.firstname.message}</p> }
           <input
           {...register("lastname",{
            required: "Lastname is required"
           })}
           className={`border ${errors.Lastname ? 'border-red-500' : 'border border-gray-500'} outline-none p-2 rounded-md`} type="text"
           placeholder="Last Name"
          />
          {errors.Lastname && <p className='text-red-500 font-semibold'>{errors.Lastname.message}</p> }
           <input
           {...register("email",{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address"
            }
           })}
           className={`border ${errors.email ? 'border-red-500' : 'border border-gray-500'} outline-none p-2 rounded-md`} type="Email address"
           placeholder="Email address"
          />
          {errors.email && <p className='text-red-500 font-semibold'>{errors.email.message}</p> }


          <div className='relative'>
          <input
          type={`${passwordType}`}
           {...register("password",{
            required: "Password is required"
           })}
           className={`border ${errors.password ? 'border-red-500' : 'border border-gray-500'} w-full outline-none p-2 rounded-md`} 
           placeholder="password"
          /> { showPassword ? <PiEyeLight onClick={handleClick} className='absolute right-2 top-4 cursor-pointer' /> : <PiEyeSlash onClick={handleClick} className='absolute right-2 top-4 cursor-pointer'/>}

          </div>
          {errors.password && <p className='text-red-500 font-semibold'>{errors.password.message}</p> }
        <button className='bg-[#38cc8c] text-white p-2 rounded-md'> {loading ? "loading..." : "claim your free trial"}</button>
        </form>
        <p className='text-center'>By clicking the button, you are agreeing to our <span className='text-red-900'>terms and services</span></p>
       </div>
      </div>
     </div>
    </div>
 
    </>
  )
}

export default App
