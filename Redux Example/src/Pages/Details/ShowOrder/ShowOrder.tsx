import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ORDER, EMPTY_ORDER } from "../../../Redux/Actions/totalActions";
import BarChart from "../../BarChart/BarChart";
import "./ShowOrder.scss";

const ShowOrder = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state: any) => state.allOrders);

  const [dateSelected, setDateSelected] = useState(
    new Date().toISOString().split("T")[0]
  );
  const user = useSelector((state: any) => state.user);
  const getItems = () => {
    const s = localStorage.getItem(user.username + "orders");
    let objArray = JSON.parse(s || "[]");
    objArray.forEach((element: any) => {
      dispatch({ type: ADD_ORDER, order: element });
    });
  };
  useEffect(() => { //component will unmount
    getItems();
    return (()=>{
      dispatch({ type: EMPTY_ORDER });
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="Date-Field"  >
        <input
          type="date"
          className="date-input"
          value={dateSelected}
          onChange={(event) => setDateSelected(event.target.value)}
        ></input>
      </div>
      {orders &&
        orders.itemsMap &&
        Array.from(orders.itemsMap.keys()).map((key: any) => {
          return (
            key === dateSelected && (
              <div>
                <div>Orders on {key}</div>
                <div className="Show-Items">
                  {orders.itemsMap.get(key) &&
                    orders.itemsMap.get(key).map((eachOrder: any) => {
                      //each date array map
                      return (
                        <div className="Show-Items-Wrapper">
                          <div className="Show-Items-Header">
                            <span>items</span>
                            <span>Count</span>
                          </div>
                          {Array.from(eachOrder.order.keys()).map(
                            (key: any) => {
                              return (
                                <div className="Show-Items-Card">
                                  <span>{key}</span>
                                  <span>{eachOrder.order.get(key)}</span>
                                </div>
                              );
                            }
                          )}
                          <div className="Show-Items-Footer">
                            <span>Total Amount - {eachOrder.price}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )
          );
        })}
      {orders &&
        orders.itemsMap &&
        orders.itemsMap.get(dateSelected) === undefined && (
          <div>No order is placed in this date</div>
        )}
    <div className="Show-Bar">
        <BarChart clicked={dateSelected}/>
    </div>
    </div>
  );
};
export default ShowOrder;
