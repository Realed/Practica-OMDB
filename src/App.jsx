import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//PAGES
import HomePage from "./pages/Home"
import RegisterPage from "./pages/Register"
import SignInPage from "./pages/LogIn"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={SignInPage} />
      </Router>
    </>
  )
}

export default App
