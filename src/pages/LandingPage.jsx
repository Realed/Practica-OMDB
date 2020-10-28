import React from "react"

//COMPONENTS
import firebase from "../firebase"
import GlobalStyles from "../components/GlobalStyles"

//STYLES

const LandingPage = ({ history }) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      history.replace("/home")
    } else {
      history.replace("/register")
    }
  })

  return (
    <>
      <GlobalStyles />
    </>
  )
}

export default LandingPage
