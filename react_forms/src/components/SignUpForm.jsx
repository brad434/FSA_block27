import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault()
    // console.log('This is the handleSubmit handler. Its been submitted')

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setToken(data.token)
      console.log(data.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>SignUpForm</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username:
          <input type='text' name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </label>

        <label htmlFor="password">Password:
          <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm