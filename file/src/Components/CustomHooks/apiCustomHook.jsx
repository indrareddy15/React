import React from "react";
import useFetch from "./useFetch";

const FetchCustomHook = () => {
    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    if (loading) return <div>Loading.....!</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Custome Data Fetching From Api</h1>
            <ul>
                {data &
                    (data.length > 0 ? (
                        data.map((item) => <li key={item.id}>{item.title}</li>)
                    ) : (
                        <p>No Data Available</p>
                    ))}
            </ul>
        </div>
    );
};

export default FetchCustomHook;
