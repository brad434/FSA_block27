import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      {/* Below is used for if there is a token available it will run the Authenticate code */}
      <Authenticate token={token} setToken={setToken} />
      {/* {token && <Authenticate token={token} username={token.username} />} */}
    </>
  )
}

export default App
