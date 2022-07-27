import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const AddData_qty = useSelector((state) => state.Reducer.AddQty);
  // unique Qty_Num iterating========
  const uniQty=AddData_qty.reduce((fQty,item)=>{
    let obj=fQty.find((elem)=>elem.id===item.id)
    if(obj)
    {
      return fQty
    }
    return fQty.concat([item])
  },[])
  // console.log('qty',AddData_qty.length);
  // console.log('qty',AddData_qty);
  return (
    <>
      <div className="bg-info shadow sticky-top container-fluid p-1">
        <div className=" container d-flex justify-content-between align-items-center p-2">
          <div className="h4 ">IndExpress</div>
          <div className="">
            <NavLink
              exact
              activeClassName="active_class"
              to="/"
              className="mx-4"
            >
              Home
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/about">
              About
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="qty_block">
            <NavLink exact activeClassName="active_class" to="/list">
              <i className="fa-solid fa-cart-plus fa-xl"></i>
            </NavLink>
            <span className="counter px-1">{AddData_qty.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
