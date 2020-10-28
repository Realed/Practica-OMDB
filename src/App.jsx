import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//PAGES
import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/Register"
import SignInPage from "./pages/LogIn"
import HomePage from "./pages/Home"
import MoviesPage from "./pages/Movies"
import ContactPage from "./pages/ContactUs"
import MoviePage from "./pages/Movie"
import LogOutPage from "./pages/LogOut"

const App = () => {
  if (localStorage.getItem("movie") === null) {
    localStorage.setItem("movie", "[]")
  }
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/contactus" component={ContactPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/logout" component={LogOutPage} />
      </Router>
    </>
  )
}

export default App
