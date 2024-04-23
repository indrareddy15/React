import React, { useEffect, useRef, useState } from "react";

const ExeUseRef = () => {
  //   const inputRef = useRef(null);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(inputRef.current.value);
  //     console.log(inputRef.current);
  //     inputRef.current.value = "";
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input ref={inputRef} type="text" />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // // // // // // // // // // // // // // // // // // // // // // // // --------------------------
  //   const countRef = useRef(0);
  //   const increament = () => {
  //     countRef.current += 1;
  //     console.log(countRef.current);
  //   };
  //   return (
  //     <div>
  //       <p>Count: {countRef.current}</p>
  //       <button onClick={increament}>Increament</button>
  //     </div>
  //   );
  // // // // // // // // // // // // // // // // // // // // // // // // --------------------------

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Perform scroll-related operations
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef?.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return <div ref={scrollRef}>Scrollable Content</div>;
};

export default ExeUseRef;
