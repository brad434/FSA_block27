import React, { useState } from 'react'

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    console.log('handleclick works!')
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: 'GET',
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, },
      })
      const data = response.json();
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <button onClick={handleClick}>Authenticate Token</button >
    </>
  )
}

export default Authenticate