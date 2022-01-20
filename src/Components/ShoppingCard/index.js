

import React, { Component } from "react";
import "./index.scss";
export default class ShoppingCard extends Component {
    
 
  
  render(){
    
    const quantity=this.props.products.quantity;
    
  return (

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >

    
      <div className="modal-dialog my-0">
        <div className="modal-content p-3">
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>



       





          <h3 className="header text-center">My Cart</h3>

          {quantity ? 



              <>

              



              <h6 className="fw-bold">Cart Summary</h6>

              
              <div className="item-cart d-flex p-2">
                <div >
                  <img src={require("../../images/cart.png")} alt="" />
                </div >

                <div className="details d-flex flex-column ms-3">
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>

                  <small> Quantity {quantity}</small>


                  <div className="d-flex justify-content-between align-items-center my-2">
                    <p className="price mb-0">
                        9,999 LE
                    </p>

                    <button className="btn" onClick={this.props.clearCart}>
                      Remove
                    </button>
                  </div>

                </div>



              </div>

              <h5 className="fw-bold text-center my-3">Total : {quantity * 9999} LE</h5>

              <div className="d-flex justify-content-between">
                <button className="btn review">Review Cart</button>
                <button className="btn check">Complete Checkout</button>
              </div>
              </>






            
           : 



           
            <h4 className="my-5 text-center">Your Cart Is Empty</h4>
          }
        </div>
      </div>
    </div>
  );
}
}