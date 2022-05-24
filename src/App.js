import React from 'react'
import { Routes, Route } from "react-router-dom"
import Api from './components/apiData/Api'
import SignUp from './components/signup/SignUp'
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/api" element={<Api />} />
      </Routes>
    </>
  )
}

export default App