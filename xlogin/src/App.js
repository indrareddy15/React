import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (userName === 'user' && password === 'password') {
      setMsg(`Welcome, ${userName}!`)
      setIsLoggedIn(true);
    } else {
      setMsg(`Invalid username or password`)
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {!isLoggedIn ? (
        <form onSubmit={onSubmitForm}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={userName} required onChange={(e) => setUserName(e.target.value)} />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type='submit'>Submit</button>
          {msg}
        </form>
      ) : (`${msg}`)}
    </div>
  );
}

export default App;
