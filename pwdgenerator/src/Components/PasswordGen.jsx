/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="cointainer">
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="mb-4">
          <input
            className="border rounded p-2 w-64"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="ml-2 bg-blue-500 text-white rounded px-4 py-2"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
          {/* <button
            className="ml-2 bg-blue-500 text-white rounded px-4 py-2"
            onClick={generatePassword}
          >
            Generate
          </button> */}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
