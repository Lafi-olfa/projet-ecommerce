import React from "react";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../redux/action";
import { FiMinusCircle } from "react-icons/fi";

const ItemQty = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="ItemQty">
      {el.qty > 1 ? (
        <div>
          <button id="Button" onClick={() => dispatch(decrementQty(el))}>
            <FiMinusCircle />
          </button>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>{el.qty}</span>
          <button id="Button" onClick={() => dispatch(incrementQty(el))}>
            <i className="fa fa-plus-circle"></i>
          </button>
        </div>
      ) : (
        <div>
          <button id="Button">
            <i className="fa fa-minus-circle"></i>
          </button>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>{el.qty}</span>
          <button id="Button" onClick={() => dispatch(incrementQty(el))}>
            <i className="fa fa-plus-circle"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemQty;
