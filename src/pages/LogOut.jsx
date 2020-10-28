import React, { useEffect, useState } from "react"
import GlobalStyles from "../components/GlobalStyles"
import firebase from "../firebase"
import styled from "styled-components"
import fontFamily from "../styles/fontfamily"

const StyledHeader = styled.h1`
  font-weight: 900;
  font-family: ${fontFamily.accent};
  text-align: center;
  margin-bottom: 0;
  text-decoration: underline lightgreen;
`

const StyledP = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 300;

  span {
    font-weight: 500;
  }
`

const LogOutPage = ({ history }) => {
  const [counter, setCounter] = useState(3)

  const timeCounter = () => {
    let counterInterval = setInterval(() => {
      tick()
    }, 1000)

    setTimeout(() => {
      clearInterval(counterInterval)
      history.replace("/register")
    }, 3000)
  }

  const tick = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  const handleChangePage = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        history.replace("/home")
      }
    })
  }

  useEffect(() => {
    handleChangePage()
  }, [])

  useEffect(() => {
    timeCounter()
  }, [counter])

  return (
    <>
      <GlobalStyles />
      <StyledHeader>Logged Out Succesfully</StyledHeader>
      <StyledP>
        Redirecting in <span>{counter}</span> ...
      </StyledP>
    </>
  )
}

export default LogOutPage
