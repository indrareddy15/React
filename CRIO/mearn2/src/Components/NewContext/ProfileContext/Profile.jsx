import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  console.log("User_Profile", user);

  if (!user) return <h1>User Not Logged....!</h1>;

  return <div>{/* <h1>Profile: {user ? user.userName : "Guest"}</h1> */}</div>;
}

export default Profile;
