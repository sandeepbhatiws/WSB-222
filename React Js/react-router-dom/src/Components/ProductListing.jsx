import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import ProductCard from './Common/ProductCard'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const priceRanges = [
  {
    from : 0,
    to : 500,
    value : 'Under ₹500'
  },
  {
    from : 501,
    to : 1500,
    value : '₹501 - ₹1500'
  },
  {
    from : 1501,
    to : 5000,
    value : '₹1501 - ₹5000'
  },
  {
    from : 5001,
    to : 15000,
    value : '₹5001 - ₹15000'
  },
  {
    from : 15001,
    to : 100000,
    value : 'Above ₹15001'
  }];
const ratings = [5, 4, 3, 2]

export default function ProductListing() {

  var params = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  var [categories, setCategories] = useState([]);
  var [products, setProducts] = useState([]);

  const [sorting, setSorting] = useState('');
  const [rating, setRating] = useState('');
  var [categoryFilter, setCategoryFilter] = useState([]);

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  useEffect(() => {
    if(params.slug){
      setCategoryFilter([]);
      setCategoryFilter([params.slug])
    }
  },[params.slug])

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch(() => {
        toast.error('Something went wrong !!')
      })
  }, [])

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params : {
        limit : 12,
        page : currentPage,
        sorting : sorting,
        rating : rating,
        categories : categoryFilter.toString(),
        price_from : priceFrom,
        price_to : priceTo
      }
    })
      .then((result) => {
        setProducts(result.data.data);
        setTotalPages(result.data.total_pages)
      })
      .catch(() => {
        toast.error('Something went wrong !!')
      })
  }, [currentPage, sorting, rating, categoryFilter, priceFrom, priceTo])

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
                    <label 
                    key={cat.id} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input 
                        onClick={ () => {

                        if(categoryFilter.includes(cat.slug)){
                          var catFilters = categoryFilter.filter((v) => {
                            if(v != cat.slug){
                              return v
                            }
                          })

                          setCategoryFilter([...catFilters])

                          console.log([...catFilters])

                        } else {
                          console.log([...categoryFilter,cat.slug])
                          setCategoryFilter([...categoryFilter,cat.slug])
                        }
                        setCurrentPage(1)
                      }} 
                      type='checkbox' checked={ categoryFilter.includes(cat.slug) ? 'checked' : '' } className='accent-emerald-700' />
                      {cat.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className='mb-6'>
                <h3 className='text-sm font-semibold text-gray-700 mb-3'>Price</h3>
                <div className='space-y-2'>
                  {priceRanges.map((range) => (
                    <label key={range.value} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input type='radio' name='price' 
                      onClick={ () => {
                        setPriceFrom(range.from)
                        setPriceTo(range.to)
                        setCurrentPage(1)
                      } }
                      className='accent-emerald-700' />
                      {range.value}
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating filter */}
              <div>
                <h3 className='text-sm font-semibold text-gray-700 mb-3'>Customer Rating</h3>
                <div className='space-y-2'>
                  {ratings.map((r) => (
                    <label 
                      onClick={ () => {
                        setRating(r)
                        setCurrentPage(1)
                      } }
                    key={r} className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                      <input type='radio' name='rating' className='accent-emerald-700' />
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
              <select className='border border-gray-300 rounded-lg text-sm px-3 py-2 text-gray-600 outline-none' defaultValue='popularity'
              onChange={ (e) => {
                console.log(e.target.value)
                setSorting(e.target.value)
                setCurrentPage(1)
              } }
              >
                <option value=''>Sort by: Popularity</option>
                <option value='1'>Name: A to Z</option>
                <option value='2'>Name: Z to A</option>
                <option value='3'>Price: Low to High</option>
                <option value='4'>Price: High to Low</option>
              </select>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className='mt-6'>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
