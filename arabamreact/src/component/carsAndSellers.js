import React from 'react'
import FeaturedSellers from './featuredSellers'
import SalesCar from './salesCar'

function carsAndSellers() {
  return (
    <div className='myContainer'>
        <div className='showcase'>
        <FeaturedSellers></FeaturedSellers>
        <SalesCar></SalesCar>
        </div>
    </div>
  )
}

export default carsAndSellers