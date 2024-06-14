import React, { useState } from 'react'

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState('')

  async function handleClick() {

    try {
      // console.log("Making API call with token:", token)
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: 'GET',
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, },
      })

      const data = await response.json();
      console.log("API response:", data)

      console.log("API message:", data.message)
      setSuccessMessage(data.message);

      console.log("Username set to:", data.data.username)
      setUsername(data.data.username)

    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && username && <p>{successMessage}, {username}</p>}
      {error && <p>{error}</p>}

      <button onClick={handleClick}>Authenticate Token!</button>
    </>
  )
}

export default Authenticate