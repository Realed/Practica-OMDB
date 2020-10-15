import React, { createRef } from "react"
import styled, { createGlobalStyle } from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"
import { Link } from "react-router-dom"

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }
  * {
    font-family: ${fontFamily.main};
    box-sizing: border-box;
  }
  h1{
    font-weight: 400;
  }
`

const PageWrapper = styled.div`
  /* width: 100vw; */
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

const SignInHeader = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const SignInBox = styled.div`
  height: 75%;
  width: 25%;
  min-width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    display: inline-block;
    margin-right: 20px;
    text-decoration: ${colors.bgColor} underline;
  }
`

const StyledLink = styled(Link)`
  border: none;
  background-color: ${colors.bgColor};
  width: 140px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.2em;
  color: white;
  font-family: ${fontFamily.accent};
  cursor: pointer;
  border: 3px solid ${colors.bgColor};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
  }
`

const MainRegister = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .register-wrapper {
    width: 60%;
    height: 80%;
    max-width: 1000px;
    min-width: 878px;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.149);
    padding: 30px 38px;
    background-color: #fff;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-rows: 1fr;
    align-items: center;

    .benefits-box {
      width: 100%;
      height: 100%;
      padding-right: 25px;
      display: flex;
      align-items: center;

      .benefits-wrapper {
        height: 60%;
        display: flex;
        flex-direction: column;

        header {
          h1 {
            font-size: 1.5em;
            font-weight: 300;
            margin: 0;
            font-family: ${fontFamily.accent};
            text-decoration: ${colors.bgColor} underline;

            span {
              color: ${colors.bgColor};
              font-family: ${fontFamily.accent};
            }
          }
        }

        ul {
          list-style: none;
          margin: 0;

          li {
            font-weight: 200;
            font-size: 1.3em;
          }

          .li1::before {
            background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1590671060/ProductPlan/Sign-Up-Page-Redesign/templates.svg");
            content: "";
            display: block;
            position: relative;
            width: 36px;
            height: 35px;
            top: 35px;
            right: 45px;
          }
          .li2::before {
            background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1590671060/ProductPlan/Sign-Up-Page-Redesign/presenter-view.svg");
            content: "";
            display: block;
            position: relative;
            width: 36px;
            height: 33px;
            top: 35px;
            right: 45px;
          }
          .li3::before {
            background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1586776060/ProductPlan/Homepage-Test/list-view-icon-m.svg");
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            content: "";
            display: block;
            position: relative;
            width: 36px;
            height: 33px;
            top: 35px;
            right: 45px;
          }
        }
      }
    }

    .separation-line {
      display: block;
      width: 100%;
      background-color: #d8d8d8;
      height: 90%;
    }

    .register-box {
      width: 100%;
      height: 100%;
      padding-left: 25px;
      display: flex;
      align-items: center;

      form.register-form {
        width: 100%;
        height: 90%;

        .register-header {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 10px;

          header {
            h1 {
              font-size: 1.7em;
              font-family: ${fontFamily.accent};
              text-align: center;
              margin-bottom: 10px;
            }
          }
          main {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            .register-google {
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              border: solid 1px #d1d5d9;
              border-radius: 7px;
              cursor: pointer;

              &:hover {
                background-color: #f7f7f7;
                transition: all 0.2s ease-in;
              }

              img {
                width: 30px;
                height: 30px;
                margin-right: 5px;
              }
              p {
                font-weight: 200;
              }
            }
          }
          .signup-or {
            margin-top: 5px;
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
        }
        .register-form__wrapper {
          width: 100%;
          height: 60%;
          display: flex;
          flex-direction: column;

          .name-field,
          .email-field,
          .password-field,
          .submit-field {
            display: flex;
            margin-bottom: 14px;

            input {
              padding: 10px;
              height: 42px;
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
              font-size: 0.7em;
              font-weight: 100;
            }
          }
          .name-field {
            justify-content: space-between;
            input {
              width: 49%;
            }
          }
          .email-field {
            flex-direction: column;
          }
          .password-field {
            flex-direction: column;

            header {
              display: flex;
              justify-content: space-between;
              input {
                width: 49%;
              }
            }
          }
          .submit-field {
            align-items: center;
            justify-content: center;
            height: 55px;
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
  }
`

const BrandsFooter = styled.div`
  height: 15vh;
  width: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 1.3em;
      font-family: ${fontFamily.accent};

      span {
        color: green;
        font-weight: 900;
      }

      span.biz-name {
        color: ${colors.bgColor};
        font-weight: 900;
      }
    }

    img {
      max-width: 90%;
      max-height: 100%;
    }
  }
`

const RegisterPage = () => {
  //REFS
  const form = createRef()
  const emailLabel = createRef()
  const passwordLabel = createRef()
  const firstNameField = createRef()
  const lastNameField = createRef()
  const emailField = createRef()
  const passwordField = createRef()
  const passwordRepeatField = createRef()

  //STATE

  //FUNCTIONS
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(emailField.current.value)
    fieldsWatchers()
  }

  const fieldsWatchers = () => {
    namesWatcher()
    emailWatcher()
    passwordWatcher()
  }

  const namesWatcher = () => {
    if (
      firstNameField.current.value === "" &&
      lastNameField.current.value === ""
    ) {
      markAsRed(
        emailLabel.current,
        firstNameField.current,
        lastNameField.current,
        "Please, fill the names fields"
      )
    }
  }

  const emailWatcher = () => {
    if (emailField.current.value === "") {
      markAsRed(
        emailLabel.current,
        emailField.current,
        null,
        "Please, fill the email field"
      )
    }
  }

  const passwordWatcher = () => {
    if (
      passwordField.current.value === "" &&
      passwordRepeatField.current.value === ""
    ) {
      markAsRed(
        passwordLabel.current,
        passwordField.current,
        passwordRepeatField.current,
        "Please, fill all the password fields"
      )
    }
  }

  const resetStyles = (e) => {
    firstNameField.current.style.border = "1px solid #b9b8b8"
    firstNameField.current.style.boxShadow = "none"

    lastNameField.current.style.border = "1px solid #b9b8b8"
    lastNameField.current.style.boxShadow = "none"

    emailField.current.style.border = "1px solid #b9b8b8"
    emailField.current.style.boxShadow = "none"

    passwordField.current.style.border = "1px solid #b9b8b8"
    passwordField.current.style.boxShadow = "none"

    passwordRepeatField.current.style.border = "1px solid #b9b8b8"
    passwordRepeatField.current.style.boxShadow = "none"
  }

  const markAsRed = (label, field1, field2, msg1) => {
    if (label) {
      label.textContent = msg1
      label.style.color = "coral"
    }
    if (field1) {
      field1.style.border = "1px solid coral"
      field1.style.boxShadow = "0 0 0 2px rgba(255, 0, 0, 0.2)"
    }
    if (field2) {
      field2.style.border = "1px solid coral"
      field2.style.boxShadow = "0 0 0 2px rgba(255, 0, 0, 0.2)"
    }
  }

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <SignInHeader>
          <SignInBox>
            <p>Already have an account?</p>
            <StyledLink to="/login">Log In</StyledLink>
          </SignInBox>
        </SignInHeader>

        <MainRegister>
          <div className="register-wrapper">
            <div className="benefits-box">
              <div className="benefits-wrapper">
                <header>
                  <h1>
                    Start Watching Movies with FlowMovie for <span>FREE.</span>
                  </h1>
                </header>
                <ul className="menu">
                  <li className="li1">New movies with 4K resolution</li>
                  <li className="li2">New arrivals every week</li>
                  <li className="li3">
                    Up to 3 devices simultaneously for free
                  </li>
                </ul>
              </div>
            </div>
            <div className="separation-line"></div>
            <div className="register-box">
              <form
                className="register-form"
                ref={form}
                onSubmit={handleFormSubmit}
              >
                <header className="register-header">
                  <header>
                    <h1>Start Your 14 Days Free Trial</h1>
                  </header>
                  <main>
                    <div className="register-google">
                      <img
                        src="https://vistatec.com/wp-content/uploads/2018/12/google-favicon-vector-400x400.png"
                        alt="googleimage"
                      />
                      <p>Sign Up With Google</p>
                    </div>
                  </main>
                  <div className="signup-or">
                    <p>or</p>
                  </div>
                </header>
                <main className="register-form__wrapper">
                  <div className="name-field">
                    <input
                      type="text"
                      placeholder="First Name"
                      ref={firstNameField}
                      id="firstNameField"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      ref={lastNameField}
                      name="email"
                      id="lastNameField"
                    />
                  </div>
                  <div className="email-field">
                    <input
                      type="email"
                      placeholder="Email"
                      ref={emailField}
                      id="emailField"
                    />
                    <label htmlFor="email" ref={emailLabel}>
                      *Please enter a valid email
                    </label>
                  </div>
                  <div className="password-field">
                    <header>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="passwordField"
                        ref={passwordField}
                      />
                      <input
                        type="password"
                        name=""
                        id="passwordRepeatField"
                        placeholder="Repeat Password"
                        ref={passwordRepeatField}
                      />
                    </header>
                    <label htmlFor="password" ref={passwordLabel}>
                      *Please enter a valid password
                    </label>
                  </div>
                  <div className="submit-field">
                    <input type="submit" value="START FREE TRIAL" />
                  </div>
                </main>
              </form>
            </div>
          </div>
        </MainRegister>

        <BrandsFooter>
          <div className="content-wrapper">
            <h1>
              Join Over <span>+30,000</span> Product Managers who trust in
              <span className="biz-name"> FLowMovie</span>
            </h1>
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ProductPlan/Sign-Up-Page-Redesign/clients_logo_desk_2x.png"
              alt=""
            />
          </div>
        </BrandsFooter>
      </PageWrapper>
    </>
  )
}

export default RegisterPage
