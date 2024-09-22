import React, { useContext } from "react";
import UserContext from "../Context/ContextProvider";

function UserProfile() {
  const { user, loading } = useContext(UserContext);

  console.log("UserProfile", user);

  if (loading) return <p>Loading....!</p>;
  if (!user) return <p>No User Data Found</p>;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserProfile;
