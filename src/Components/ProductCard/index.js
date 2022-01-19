import React from 'react'
import './index.scss';
import { StarRate } from '@material-ui/icons';




export default function ProductCard(props) {
    let product=props.product;
    return (
        <div className='product-card col-12 col-sm-6 col-lg-3 '>
           <div className='card p-2'>  
               <img src="/img/card/360.png" alt="" className="icon" />
               <img src={product.image} alt="" className='img-fluid' />

               <p className='description'>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
               </p>

               <div className="d-flex justify-content-between">
                   <p className='price'>{product.price} <span>LE</span></p>

                   {product.discount && <p className='discount px-1 '>{product.discount} %</p>}

                   <img src="/img/card/addidas.png" alt="" className='addidas' />
               </div>
 
               <p className='rating'><StarRate fontSize='small' /><StarRate fontSize='small'/><StarRate fontSize='small'/><StarRate fontSize='small' color="disabled"/><StarRate fontSize='small' color="disabled"/> <small> 4.2 of 5</small></p>

           </div>

           


           
          
            
            
        </div>
    )
}
