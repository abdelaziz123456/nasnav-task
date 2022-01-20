import { Telegram } from "@material-ui/icons";
import React from "react";
import "./index.scss";
export default function Footer() {
  return (
    <div className="footer">
      {/* top footer start */}
      <div className="row top-footer">
        {/* left section start */}

        <div className="left col-12 col-lg-6 my-3">
          <img
            src={process.env.PUBLIC_URL +"/img/footer/yeshtery.png"}
            alt=""
            width="220"
            height="58"
            className="my-3"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p>
            
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed dia m nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <p>
            esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
            at vero eros et accumsan et iusto odio dignissim qui blandit
          </p>
        </div>

        {/* left section end */}

        {/* right section start */}

        <div className="right col-12 col-lg-6 ps-5 my-3">
          <h6 className="my-2">Subscribe to our newsletter</h6>

          <div className="d-flex align-items-center subscribe">
          <input
              type="email"
              className="form-control "
              
              placeholder="Enter Your Email"
            />
            <button className="btn d-flex  ">Subscribe <Telegram fontSize="small"/></button>
            
          </div>


          <div className="row  mt-4">
            <div className="col-6">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Track Order</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
              <p>Sell With Us</p>
              <p>Shipping And Returns</p>
            </div>
            <div className="col-6 links ps-5">
              <p><img src={process.env.PUBLIC_URL +"/img/footer/facebook.png"} alt="" /> /YESHTERY</p>
              <p><img src={process.env.PUBLIC_URL +"/img/footer/linkedin.png"} alt="" />/YESHTERY</p>
              <p><img src={process.env.PUBLIC_URL +"/img/footer/instagram.png"} alt="" />/YESHTERY</p>
              <p><img src={process.env.PUBLIC_URL +"/img/footer/twitter.png"} alt="" />/YESHTERY</p>
            </div>
          </div>


        </div>

        {/* right section end */}
      </div>

      {/* top footer end */}

      {/* bottom footer start */}

      <div className="bottom-footer d-flex justify-content-between align-items-center my-3">

        <small className="fw-light"> &#169; 2021 yesterday. all rights reserved	</small>

        <div className="d-flex">
          <img src={process.env.PUBLIC_URL +"img/footer/cash.png"} alt="" height='30' className="mx-1" />
          <img src={process.env.PUBLIC_URL +"img/footer/visa.png"} alt="" height='30' className="mx-1" />
          <img src={process.env.PUBLIC_URL +"img/footer/master.png"} alt="" height='30' className="mx-1" />
        </div>


        <p className="fw-light mb-0">powerd by <img src={process.env.PUBLIC_URL +"img/footer/nasnav.png"} alt="" /></p>


      </div>

      {/* bottom footer end */}
    </div>
  );
}
