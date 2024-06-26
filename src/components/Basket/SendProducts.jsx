import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products" dir="ltr">
      <div className="send_info_price">
        <span>Shipping cost</span>
        <span>
          {state.totalPrice - state.offerPrice <= 10_000_000
            ? `${sendPrice.toLocaleString()} TND`
            : "Free"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 10_000_000 && (
        <div className="send_free_img">
          <img src="images/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}
