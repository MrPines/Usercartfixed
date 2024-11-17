import React from "react";
import "./Usercart.css";
import Counter from "../counter/counter";
import { assets } from "../assets/assets";

export default function usercart() {
  return (
    <div className="cart-container">
      <div className="cart-products">
        <div className="product-left">
          <img src={assets.rainbow_shirt} alt="" />
          <div className="item-info">
            <h3>Gradient Graphic T-shirt</h3>
            <li>Size: <span className="info">Large</span></li>
            <li>Color: <span className="info">White</span></li>
            <p className="prices">$145</p>
          </div>
        </div>

        <div className="product-right">
          <img src={assets.trash} alt="" />
          <div className="counter">
            <Counter></Counter>
          </div>
        </div>
      </div>

      <hr class="custom-underline"/>

      <div className="cart-products">
        <div className="product-left">
          <img src={assets.checker_shirt} alt="" />
          <div className="item-info">
            <h3>Checkered Shirt</h3>
            <li>Size: <span className="info">Medium</span></li>
            <li>Color: <span className="info">Red</span></li>
            <p className="prices">$180</p>
          </div>
        </div>

        <div className="product-right">
          <img src={assets.trash} alt="" />
          <div className="counter">
            <Counter></Counter>
          </div>
        </div>
      </div>

      <hr class="custom-underline"/>

      <div className="cart-products">
        <div className="product-left">
          <img src={assets.jeans} alt="" />
          <div className="item-info">
            <h3>Skinny Fit Jeans</h3>
            <li>Size: <span className="info">Large</span></li>
            <li>Color: <span className="info">Blue</span></li>
            <p className="prices">$240</p>
          </div>
        </div>

        <div className="product-right">
          <img src={assets.trash} alt="" />
          <div className="counter">
            <Counter></Counter>
          </div>
        </div>
      </div>
    </div>
  );
}
