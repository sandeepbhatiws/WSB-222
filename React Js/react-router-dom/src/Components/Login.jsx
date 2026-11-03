import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { ContextAPI } from '../Context/Context'
import { toast } from 'react-toastify';

export default function Login() {

    const { isLogin, setIsLogin } = useContext(ContextAPI);
    var navigate = useNavigate();

    useEffect(() => {
        if(isLogin){
            navigate('/my-profile')
        }
    },[isLogin])

  return (
    <>
      {/* Breadcrumb */}
      <div className='bg-gray-50 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500'>
          <Link to={'/'} className='hover:text-emerald-700'>Home</Link> / <span className='text-gray-700'>Login</span>
        </div>
      </div>

      <section className='bg-emerald-800 py-12 text-center'>
        <div className='max-w-2xl mx-auto px-4 sm:px-6'>
          <h2 className='text-2xl font-bold text-white mb-3'>Join the Mamaearth Family</h2>
          <p className='text-emerald-100 mb-6 text-sm'>Discover natural, toxin-free products made for you and your loved ones.</p>
          <button onClick={ () => {
            setIsLogin(!isLogin)
            toast.success('Login Succussfully.')
          } } className='bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold px-8 py-3 rounded-full transition'>
            Login
          </button>
        </div>
      </section>
    </>
  )
}
