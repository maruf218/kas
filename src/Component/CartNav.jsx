import React, { useState } from "react";

const CartNav = ({forShow}) => {
    const [hover , isHovered] = useState(false)
  return (
    <li
      className={`nav-item ${forShow} position-relative`}
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <a className="nav-link d-flex align-items-center h-100">
        <i className="bi bi-cart3"></i>
      </a>
      <div className={hover ? "d-block position-absolute Cart" : "d-none"}>
        <h4 className="fw-bolder text-center mt-2">Your Cart</h4>
      </div>
    </li>
  );
};

export default CartNav;
