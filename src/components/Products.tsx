import React from 'react'
import coffeeBagsImage from '../assets/jon-tyson-KRedbshBxEk-unsplash.jpg'
import coffeeAccesoryImage from '../assets/alexandra-gorn-9rmnzkmydSY-unsplash.jpg'

const Products = () => {
    const id = 'products'
    const products = [
        {name: 'Coffee Beans', imageUrl: coffeeBagsImage}, 
        {name: 'Barista Accessories', imageUrl: coffeeAccesoryImage}
]

  const productCards = products.map(product => {
    return (
    
        <div 
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl fond-bold text-white tracking-wider'>
{product.name}
                </span>
                <div className='pt-8 text-center'>
                    <a>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>View</button>  
                    </a>
                </div>
            </div>
        </div>)
})
  
    return (
    <div id={id} className='w-full md:h-screen'>
        

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8]'>Products</p>
                
                <p> <br />// Check out our Products shipped UK wide<br /></p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {productCards}
            </div>
        </div>  
    </div>
  )
}

export default Products