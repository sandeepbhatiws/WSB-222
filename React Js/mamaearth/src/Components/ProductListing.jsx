import React from 'react'
import { Link } from 'react-router'
import products, { categories } from '../data/products'
import ProductCard from './Common/ProductCard'

const priceRanges = ['Under ₹250', '₹250 - ₹450', '₹450 - ₹650', 'Above ₹650']
const ratings = [4, 3, 2]

export default function ProductListing() {
  return (
    <>
      {/* Breadcrumb */}
      <div className='bg-gray-50 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500'>
          <Link to={'/'} className='hover:text-emerald-700'>Home</Link> / <span className='text-gray-700'>All Products</span>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6'>All Products</h1>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filters sidebar */}
          <aside className='w-full lg:w-64 shrink-0'>
            <div className='border border-gray-200 rounded-xl p-5 sticky top-24'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-semibold text-gray-800'>Filters</h2>
                <button type='button' className='text-xs text-emerald-700 font-medium hover:underline'>Clear All</button>
              </div>

              {/* Category filter */}
              <div className='mb-6'>
                <h3 className='text-sm font-semibold text-gray-700 mb-3'>Category</h3>
                <div className='space-y-2'>
                  {categories.map((cat) => (
                    <label key={cat} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input type='checkbox' className='accent-emerald-700' />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className='mb-6'>
                <h3 className='text-sm font-semibold text-gray-700 mb-3'>Price</h3>
                <div className='space-y-2'>
                  {priceRanges.map((range) => (
                    <label key={range} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input type='radio' name='price' className='accent-emerald-700' />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating filter */}
              <div>
                <h3 className='text-sm font-semibold text-gray-700 mb-3'>Customer Rating</h3>
                <div className='space-y-2'>
                  {ratings.map((r) => (
                    <label key={r} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input type='checkbox' className='accent-emerald-700' />
                      {r}★ & above
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className='flex-1'>
            <div className='flex items-center justify-between mb-6'>
              <p className='text-sm text-gray-500'>{products.length} products</p>
              <select className='border border-gray-300 rounded-lg text-sm px-3 py-2 text-gray-600 outline-none' defaultValue='popularity'>
                <option value='popularity'>Sort by: Popularity</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Customer Rating</option>
              </select>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
