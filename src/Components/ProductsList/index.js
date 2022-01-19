import React from 'react'
import ProductCard from '../ProductCard'
import './index.scss'
export default function ProductsList(props) {
    return (
        <div className="product-list">
      <h5>Similar Products</h5>
      <h6 className='fw-light'>You may like these products also</h6>
      <div className="row ">
        {
          props.productsList.map((product)=>(
            <ProductCard product={product} />
          ))
        }
       

      </div>
   </div>
    )
}
