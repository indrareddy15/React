import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { UPDATE_TAB, UPDATE_USER_LOG_OUT } from "../../Redux/Actions/totalActions";
import { placeOrder, showOrder } from "../globals";
import './Menu.scss'

export const Menu=()=>{
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const handlePlaceOrder = () =>{
        dispatch({type:UPDATE_TAB,tab:placeOrder})
    }
    const handleShowOrder = () =>{
        dispatch({type:UPDATE_TAB,tab:showOrder})
    }
    const handleLogout =()=>{
        dispatch({'type':UPDATE_USER_LOG_OUT})
    }
    return(
        <div className="Menu">
            <div className={user.tab===placeOrder?"Menu-item active":"Menu-item"} onClick={()=>handlePlaceOrder()}>
                Place Order
            </div>
            <div className={user.tab===showOrder?"Menu-item active":"Menu-item"} onClick={()=>handleShowOrder()}>
                Show Orders
            </div>

            <div className="Last-Menu-Item" onClick={()=>handleLogout()}>
                {user.loggedIn ? "Logout" :"Login"}
            </div>
        </div>
    )
}

