import React from 'react'
import { Link } from 'react-router'

const navLinks = [
  { label: 'Face Care', path: '/products' },
  { label: 'Hair Care', path: '/products' },
  { label: 'Body Care', path: '/products' },
  { label: 'Baby Care', path: '/products' },
  { label: 'Men', path: '/products' },
  { label: 'Gifting', path: '/products' },
]

export default function Header() {
  return (
    <>
      {/* Top promo strip */}
      <div className='bg-emerald-800 text-white text-center text-xs sm:text-sm py-2 px-4'>
        Get FLAT 20% OFF on your first order | Use code WELCOME20
      </div>

      {/* Main header */}
      <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3'>
          {/* Logo */}
          <Link to={'/'} className='flex items-center gap-2 shrink-0'>
            <span className='text-2xl'>🌿</span>
            <span className='text-xl sm:text-2xl font-bold text-emerald-800 tracking-wide'>mamaearth</span>
          </Link>

          {/* Search bar */}
          <div className='hidden md:flex flex-1 max-w-md items-center border border-gray-300 rounded-full px-4 py-2'>
            <span className='text-gray-400 mr-2'>🔍</span>
            <input
              type='text'
              placeholder='Search for products...'
              readOnly
              className='w-full outline-none text-sm text-gray-600 bg-transparent'
            />
          </div>

          {/* Icons */}
          <div className='flex items-center gap-4 sm:gap-6 text-emerald-900 shrink-0'>
            <Link to={'/about-us'} className='hidden sm:block text-sm font-medium hover:text-emerald-600'>About Us</Link>
            <Link to={'/contact-us'} className='hidden sm:block text-sm font-medium hover:text-emerald-600'>Contact</Link>
            <span className='cursor-pointer text-lg'>👤</span>
            <Link to={'/cart'} className='text-lg relative'>
              🛒
              <span className='absolute -top-2 -right-2 bg-emerald-700 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center'>3</span>
            </Link>
          </div>
        </div>

        {/* Category nav */}
        <nav className='hidden md:flex justify-center gap-8 border-t border-gray-100 py-2 bg-emerald-50/50'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className='text-sm font-medium text-gray-700 hover:text-emerald-700'
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}
