import React, { createRef } from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import fontFamily from "../styles/fontfamily"
import firebase from "../firebase"

//COMPONENTS
import StyledLink from "../components/StyledLink"
import GoogleBtn from "../components/GoogleBtn"
import GlobalStyles from "../components/GlobalStyles"

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v505-tang-24-abstractbackground_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=093c03cbd371598e269b846a5af0b701");
  background-repeat: no-repeat;
  background-clip: content-box;
  background-position: center;
  background-size: cover;
`

const PageHeader = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  .register-box {
    width: 25%;
    height: 75%;
    min-width: 390px;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      display: inline-block;
      margin: 0;
      margin-right: 20px;
      text-decoration: ${colors.bgColor} underline;
    }
  }
`

const PageBody = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .register-wrapper {
    height: 79%;
    width: 30%;
    max-width: 440px;
    min-width: 436.5px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.149);
    padding: 20px 35px;
    display: flex;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      header.form-header {
        height: 40%;
        width: 100%;
        margin-bottom: 7px;

        .signup-or {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          p {
            margin: 0;
            font-weight: 200;
            text-align: center;
          }
          &::before {
            content: "";
            margin-right: 6px;
            display: block;
            border: 1px solid #d1d5d9;
            flex-grow: 1;
            box-sizing: border-box;
          }

          &::after {
            content: "";
            margin-left: 6px;
            display: block;
            border: 1px solid #d1d5d9;
            flex-grow: 1;
            box-sizing: border-box;
          }
        }

        header {
          h1 {
            font-family: ${fontFamily.accent};
            font-size: 1.7em;
            text-align: center;
            text-decoration: ${colors.bgColor} underline;
            margin-bottom: 6px;
          }
        }
      }
      main.form-main {
        margin-top: 10px;

        .email-box,
        .password-box,
        .remindme-box,
        .submit-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;

          input {
            padding: 5px 10px;
            height: 45px;
            border: 1px solid #b9b8b8;
            border-radius: 4px;
            font-weight: 300;
            font-size: 0.8em;
            outline: none;
            width: 100%;

            &:focus {
              border-color: ${colors.bgColor};
              box-shadow: 0 0 0 0.1rem rgba(40, 199, 250, 0.5);
            }
          }

          label {
            margin-top: 5px;
            font-size: 0.8em;
            font-weight: 100;
          }
        }
        .remindme-box {
          margin-top: -7px;
          flex-direction: row;
          input {
            padding: 0;
            height: initial;
            width: initial;
          }
          label {
            margin: 0;
          }
        }
        .submit-box {
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            padding: 0;
            height: 50px;
            border: none;
            background-color: ${colors.bgColor};
            font-size: 1.4em;
            font-family: ${fontFamily.accent};
            color: white;
            cursor: pointer;
            border: 2px solid ${colors.bgColor};

            &:hover {
              color: ${colors.bgColor};
              background-color: transparent;
              transition: all 0.2s ease-in;
            }

            &:active {
              transition: all 0.1s ease-in;
              height: 48px;
              width: 98%;
            }
          }
        }
      }
    }
  }
`

const PageFooter = styled.div`
  height: 15vh;
  width: 100%;
`

const LogInPage = () => {
  document.title = "Log In - FLowMovie"
  //REFS
  const form = createRef()
  const emailField = createRef()
  const passwordField = createRef()
  const emailLabel = createRef()
  const passwordLabel = createRef()

  //FUNCTIONS
  const handleFormSubmit = (e) => {
    e.preventDefault()
    resetStyles()
    fieldObservers()
    if (emailField.current.value !== "" && passwordField.current.value !== "") {
      logInProcess(emailField.current.value, passwordField.current.value)
    }
  }

  const logInProcess = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        let errorMessage = error.message
        if (
          errorMessage ===
          "The password is invalid or the user does not have a password."
        ) {
          markAsRed(
            passwordLabel.current,
            passwordField.current,
            "The password is invalid."
          )
        }
        if (
          errorMessage ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          markAsRed(
            emailLabel.current,
            emailField.current,
            "There is no user with the corresponding email"
          )
        }
        console.log(errorMessage)
      })
  }

  const logInGoogleProcess = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(function (error) {
        let errorMessage = error.message
        console.log(errorMessage)
      })
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("hay user")
    } else {
      console.log("no hay user")
    }
  })

  const fieldObservers = () => {
    if (emailField.current.value === "") {
      markAsRed(
        emailLabel.current,
        emailField.current,
        "Please, fulfill the email field"
      )
    }
    if (passwordField.current.value === "") {
      markAsRed(
        passwordLabel.current,
        passwordField.current,
        "Please, fulfill the password field"
      )
    }
  }

  const resetStyles = () => {
    emailLabel.current.textContent = "*Please enter a valid email"
    passwordLabel.current.textContent = "*Please enter a valid password"

    emailField.current.style = ""
    emailLabel.current.style = ""
    passwordField.current.style = ""
    passwordLabel.current.style = ""
  }

  const markAsRed = (label, field, msg) => {
    if (field) {
      field.style.border = "1px solid coral"
      field.style.boxShadow = "0 0 0 2px rgba(255, 0, 0, 0.2)"
    }
    if (label) {
      label.textContent = msg
      label.style.color = "coral"
      label.style.fontWeight = 400
    }
  }

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <PageHeader>
          <div className="register-box">
            <p>Do not have an account?</p>
            <StyledLink to="/register">Register</StyledLink>
          </div>
        </PageHeader>

        <PageBody>
          <div className="register-wrapper">
            <form action="" ref={form} onSubmit={handleFormSubmit}>
              <header className="form-header">
                <header>
                  <h1>Sign In To Your Account</h1>
                </header>
                <GoogleBtn handleLogIn={logInGoogleProcess} />
                <div className="signup-or">
                  <p>or</p>
                </div>
              </header>
              <main className="form-main">
                <div className="email-box">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={emailField}
                  />
                  <label htmlFor="email" ref={emailLabel}>
                    *Please enter a valid email
                  </label>
                </div>
                <div className="password-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordField}
                  />
                  <label htmlFor="password" ref={passwordLabel}>
                    *Please enter a valid password
                  </label>
                </div>
                <div className="remindme-box">
                  <input type="checkbox" name="checkbox" id="" />
                  <label htmlFor="checkbox">Remind Me </label>
                </div>
                <div className="submit-box">
                  <input type="submit" value="SIGN IN" />
                </div>
              </main>
            </form>
          </div>
        </PageBody>

        <PageFooter></PageFooter>
      </PageWrapper>
    </>
  )
}

export default LogInPage
