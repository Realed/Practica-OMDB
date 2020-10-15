import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//PAGES
import HomePage from "./pages/Home"
import RegisterPage from "./pages/Register"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </Router>
    </>
  )
}

export default App
