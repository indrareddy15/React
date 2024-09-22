import React, { useEffect, useState } from "react";
import UserContext from "../Context/ContextProvider";
import UserProfile from "./UserProfile";

function UserProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApiData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (!response.ok) {
        throw new Error("Error in the Network: " + response.statusText);
      }
      const data = await response.json();
      console.log("API_Data", data);
      setUser(data);
    } catch (err) {
      console.error("Error in Fetching Data", err);
    } finally {
      setLoading(false); // Set loading to false here
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      <h1>UserProvider</h1>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default UserProvider;
