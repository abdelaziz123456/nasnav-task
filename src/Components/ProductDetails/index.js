import React, { Component } from "react";
import "./index.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  StarRate,
} from "@material-ui/icons";

export default class ProductDetails extends Component {


  //counter state for products number

state={
  counter:0
}

increaseCounter=()=>{
  this.setState({counter:this.state.counter+1})
}

decreaseCounter=()=>{
  if(this.state.counter>0){
    this.setState({counter:this.state.counter-1})
  }

}

  render(){
  return (
    <div className="product-details">
      {/* breadcrumb start */}

      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Men</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Clothing</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Tops</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Adidas</a>
          </li>
          <li className="breadcrumb-item">Adidas Black T-Shirt</li>
        </ol>
      </nav>

      {/* breadcrumb end */}

      {/* Main section start */}
      <div className="row main-section justify-content-center">
        {/* images section start */}

        <div className="col-12 col-lg-6 px-3 images-section d-flex flex-column justify-content-between align-items-center">
          <div>
            <img
              src={require("../../images/adidas.png")}
              className="img-fluid w-100"
              alt=""
            />
          </div>

          <div className="d-flex align-items-center justify-content-between w-100 my-3">
            <ArrowBackIosOutlined fontSize="small" />

            <div>
              <img
                src={require("../../images/2.png")}
                alt=""
                className=" small-image"
              />
              <img
                src={require("../../images/3.png")}
                alt=""
                className=" small-image"
              />
              <img
                src={require("../../images/4.png")}
                alt=""
                className=" small-image"
              />
              <img
                src={require("../../images/5.png")}
                alt=""
                className=" small-image"
              />
            </div>

            <ArrowForwardIosOutlined fontSize="small" />
          </div>
        </div>

        {/* images section end */}

        {/* details section start */}
        <div className="col-12 col-lg-6 d-flex flex-column details-section px-3">
          <img src={require("../../images/logo.png")} className="logo" alt="" />

          <p className="fw-bold my-2">
            Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.
          </p>

          <p className="text-secondary">Men</p>

          <div className="d-flex">
            <p className="rating">
              <StarRate fontSize="small" />
              <StarRate fontSize="small" />
              <StarRate fontSize="small" />
              <StarRate fontSize="small" />
              <StarRate fontSize="small" color="disabled" />
              <small className="mx-3 "> 4.9 of 5</small>

              <small className="mx-3 text-secondary"> 22 Rates</small>
            </p>
          </div>

          <div className="price d-flex ">
            <p className="mx-2">9,999 LE</p>
            <del className="text-secondary mx-2 ">9.999 LE</del>
            <small className="px-1">30% Off</small>
          </div>

          <hr />

          <div className="sizes  ">
            <h5 className="ms-2">Size</h5>
            <div className=" d-flex">
              <div className="size">Small</div>
              <div className="size">Medium</div>
              <div className="size">Large</div>
              <div className="size">X-Large</div>
              <div className="size">XX-Large</div>
            </div>
          </div>

          <hr />

          <div className="colors">
            <h5 className="ms-2">Color</h5>
            <div className="d-flex">
              <div className="color">
                  <img src={require("../../images/color1.png")}  alt="" />
              </div>
              <div className="color">
              <img src={require("../../images/color2.png")}  alt="" />

              </div>
            </div>
          </div>


          <hr />


          <div className="quantity">

          <h5 className="ms-2">Quantity</h5>

          <div className="number d-flex justify-content-between align-items-center">
            <button className="btn " onClick={this.decreaseCounter}>-
            </button>

            {this.state.counter}
            <button className="btn" onClick={this.increaseCounter}>
              +

            </button>
          </div>

          <div className="d-flex justify-content-between">

            <button onClick={()=>{this.props.addProduct(this.state.counter)}} className="addCart d-flex  btn justify-content-center align-items-center">
              Add To Cart
            </button>
            <button className="pick btn d-flex justify-content-center align-items-center">
              Pickup From Store
            </button>

          </div>


          </div>



        </div>

        {/* details section end */}
      </div>

      {/* Main section end */}
    </div>
  );
}
}
