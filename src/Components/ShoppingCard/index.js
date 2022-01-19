import React from "react";
import "./index.scss";
export default function ShoppingCard() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog my-0">
        <div class="modal-content p-3">
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <h3 className="header text-center">My Cart</h3>

          <h6 className="fw-bold">Cart Summary</h6>


          <div className="item-cart d-flex">
                <div className="image">

                </div>
                <div className="details">

                </div>
          </div>

        <h5 className="fw-bold text-center my-3">Total : 19,999 LE</h5>



          <div className="d-flex justify-content-between">
              <button className="btn review">
                  Review Cart
                </button>
                <button className="btn check"
                >
                    Complete Checkout
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
