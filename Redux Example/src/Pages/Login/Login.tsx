import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { UPDATE_USER_LOG_IN } from "../../Redux/Actions/totalActions";

import "./Login.scss";

export const Login = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch({type:UPDATE_USER_LOG_IN,username:form.getValues('username'),password:form.getValues('password')});
  };
  return (
    <div className="Login-Wrapper">
      <div className="Login-username">
        <label>Username</label>
        <input  {...form.register("username")} name="username"></input>

      </div>
      <div className="Login-Password">
        <label>Password</label>
        <input  {...form.register("password")} name="password"></input>
      </div>
      <div>
        <button className="btn" onClick={() => handleOnClick()}>Login</button>
      </div>
    </div>
  );
};
