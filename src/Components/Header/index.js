import {
  AddIcCallOutlined,
  ShoppingCartOutlined,
  RoomOutlined,
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List";
import React from "react";
import "./index.scss";
export default function Header() {
  return (
    <div className="header">
      {/* top header start */}

      <div className="top-header  d-flex justify-content-between  ">
        <div className="left">
          <ListIcon />
          <img src={process.env.PUBLIC_URL +"/img/yeshtery.svg"} alt="" />
        </div>

        <div className="center">
          <p className="m-0">
            {" "}
            <ArrowBackIosOutlined fontSize="small" /> Valentine's Day Offers Buy
            Two Get One Free <ins>Shop Now</ins>{" "}
            <ArrowForwardIosOutlined fontSize="small" />{" "}
          </p>
        </div>

        <div className="right d-flex  ">
          <p>
            <AddIcCallOutlined fontSize="small" />
            <span>Contact Us</span>
          </p>

          <p>
            <ShoppingCartOutlined fontSize="small" />
            <span>Track Order</span>
          </p>
          <p>
            <RoomOutlined fontSize="small" />
            <span>Find A Store</span>
          </p>
        </div>
      </div>

      {/* top header end  */}





      {/* center header start */}

      <div className="mid-header  d-flex justify-content-between align-items-center py-2">


        <div className="left d-flex align-items-center">
            <label htmlFor="" className="form-label">
                <SearchOutlined fontSize="large"/>
            </label>
        <input type="search" id="form1" class="form-control" placeholder="Search" />
        </div>
        <div className="center">
          <img src={process.env.PUBLIC_URL +"/img/addidas.png"} height="57" alt="" />
        </div>
        <div className="right d-flex  ">
          <p>
            <ShoppingBasketOutlined  />
            <span>Cart</span>
          </p>

          <p>
            <FavoriteBorderOutlined/>
            <span>Wishlist</span>
          </p>
          <p>
            <PersonOutlineOutlined />
            <span>Login</span>
          </p>
        </div>
      </div>

      {/* center header end */}












      {/* bottom header start */}

      <div className="bottom-header d-flex justify-content-center ">
          <div className="d-flex justify-content-between w-100 ">
            <p>Men</p>
            <p>Women</p>
            <p>Unisex</p>
            <p>Kids</p>
            <p>Best Sellers</p>
            <p>New Arrivals</p>
            <p>Offers</p>

          </div>
        
     </div>


     {/* bottom header end */}




     









    </div>
  );
}
