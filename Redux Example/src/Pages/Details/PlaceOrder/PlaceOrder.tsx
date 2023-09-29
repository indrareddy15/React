import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  ADD_ITEM,
  DELETE_ITEM,
  INITITIAL,
  UPDATE_TAB,
} from "../../../Redux/Actions/totalActions";
import "./PlaceOrder.scss";
import { showOrder } from "../../globals";

const PlaceOrder = () => {
  const items1 = [
    { name: "Rice", price: 100 },
    { name: "item2", price: 30 },
    { name: "item3", price: 100 },
    { name: "Dinner", price: 20 },
    { name: "item5", price: 100 },
    { name: "BreakFast", price: 100 },
  ];
  const [items, setItems] = useState(items1);
  const user = useSelector((state: any) => state.user);
  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  const handleAdd = (name: string, price: number) => {
    dispatch({ type: ADD_ITEM, item: name, price: price });
  };
  const handleRemove = (name: string, price: number) => {
    dispatch({ type: DELETE_ITEM, item: name, price: price });
  };

  const handlePlaceOrder = () => {
    if (cart.totalPrice > 0) {
      if (localStorage.getItem(user.username + "orders") !== null) {
        const prevOrders = JSON.parse(
          localStorage.getItem(user.username + "orders") || "[]"
        );
        const obj: any = {
          items: JSON.stringify(Array.from(cart.counts.entries())),
          total: cart.totalPrice,
          date: new Date().toISOString().split("T")[0],
        };
        prevOrders.push(obj);
        localStorage.setItem(
          user.username + "orders",
          JSON.stringify(prevOrders)
        );
        toast.success("order placed successfully");
        dispatch({ type: INITITIAL });
        dispatch({ type: UPDATE_TAB, tab: showOrder });
      } else {
        const obj: any = [
          {
            items: JSON.stringify(Array.from(cart.counts.entries())),
            total: cart.totalPrice,
            date: new Date().toISOString().split("T")[0],
          },
        ];
        const objString = JSON.stringify(obj);
        localStorage.setItem(user.username + "orders", objString);
        dispatch({ type: INITITIAL });
        dispatch({ type: UPDATE_TAB, tab: showOrder });
        toast.success("order placed successfully");
      }
    } else {
      toast.error("Please add items to the cart then Place order", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleSearch = (search: string) => {
    if (search !== "") {
      const tempSearch = items1.filter((item: any) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setItems(tempSearch);
    } else {
      setItems(items1);
    }
  };

  return (
    <div className="placeorder-wrapper">
      <h4>Welcome to the Page {user.username}!!!</h4>
      <h6>Add Your items to the cart and place order.</h6>
      <input
        type="search"
        className="input-search"
        placeholder="search items here"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="placeorder-body">
        {items &&
          items.map((item, i) => {
            return (
              <div className="placeorder-items" key={i}>
                <span>{item.name}</span>
                <span>{item.price}$</span>
                <button
                  className="Add"
                  onClick={() => handleAdd(item.name, item.price)}
                >
                  +
                </button>
                <button
                  className="Remove"
                  onClick={() => handleRemove(item.name, item.price)}
                >
                  -
                </button>
              </div>
            );
          })}
      </div>
      <div className="Cart-Wrapper">
        <div className="Display-Cart-Wrapper">
          <div className="Display-Cart-Header">
            <span>
              <strong>Item</strong>
            </span>
            <span>
              <strong>Quantity</strong>
            </span>
            <span>
              <strong>Price</strong>
            </span>
          </div>
          {cart &&
            cart.counts &&
            Array.from(cart.counts.keys()).map((key: any) => {
              return (
                <div className="Display-cart-body">
                  <div>
                    <span>{key}</span>
                    <span>{cart.counts.get(key)}</span>
                    <span>{cart.priceEach.get(key)}$</span>
                  </div>
                </div>
              );
            })}
          <div className="Display-Cart-Total">
            <span>Total</span>
            <span>-</span>
            <span>{cart.totalPrice}$</span>
          </div>
        </div>
        <div>
          <button className="btn-div" onClick={() => handlePlaceOrder()}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
