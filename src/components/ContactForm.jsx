import React from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"
import { useRef } from "react"
import { Link } from "react-router-dom"

const ContactBox = styled.div`
  width: 30%;
  max-width: 500px;
  min-width: 395px;
  height: 500px;
  background-color: #323232;
  border-radius: 4px;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.209);
  color: white;

  header {
    margin-bottom: 20px;
    h1 {
      margin: 0;
      /* margin-bottom: 5px; */
      font-family: ${fontFamily.accent};
      text-transform: uppercase;
      text-decoration: ${colors.bgColor} underline;
    }
    p {
      margin: 0;
      font-family: ${fontFamily.main};
      font-weight: 200;
      font-size: 1em;
      color: #eeee;
    }
  }

  input,
  textarea {
    padding: 10px;
    height: 42px;
    border: 1px solid #b9b8b8;
    border-radius: 4px;
    font-size: 0.8em;
    outline: none;
    font-weight: 300;
    width: 100%;
    background-color: #ffff;

    &:hover {
      background-color: #efffff;
    }

    &:focus {
      border-color: ${colors.bgColor};
      box-shadow: 0 0 0 0.1rem rgba(40, 199, 250, 0.5);
    }
  }

  textarea {
    min-height: 150px;
    max-height: 180px;
    min-width: 100%;
    max-width: 100%;
  }

  .name__tlf-box,
  .email-box,
  .message-box,
  .submit-box {
    margin-bottom: 10px;
  }

  .name__tlf-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 49%;
    }
  }

  .submit-box {
    input {
      padding: 0;
      height: 50px;
      border: none;
      background-color: #28c7fa;
      font-size: 1.4em;
      font-family: "Poppins", sans-serif;
      color: white;
      cursor: pointer;
      border: 2px solid #28c7fa;

      &:focus {
        border-color: ${colors.bgColor};
        box-shadow: 0 0 0 0.1rem rgba(40, 199, 250, 0.5);
      }

      &:hover {
        background-color: transparent;
        color: ${colors.bgColor};
        transition: all 0.2s ease-in;
      }
    }
  }
`

const FaqBox = styled.div`
  min-height: 500px;
  width: 20%;
  min-width: 350px;
  background-color: #323232;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.209);
  padding: 20px;

  .faq-item {
    width: 100%;
    min-height: 40px;
    background-color: #222;
    margin-bottom: 10px;

    .search-item {
      padding: 5px;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 85%;
        height: 80%;
        /* border: 1px solid #111; */
        border: none;
        background-color: #222;
        border-right: none;
        color: #eeee;
        font-weight: 200;

        &:focus {
          outline: none;
        }
      }

      img {
        /* border: 1px solid #111; */
        border-left: none;
        max-width: 80%;
        max-height: 80%;
        cursor: pointer;
      }
    }

    header {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      h1 {
        margin: 0;
        color: white;
        font-size: 1.1em;
        font-family: ${fontFamily.accent};
      }
    }
    main {
      background-color: #444;

      &.show {
        min-height: 25px;
        padding: 3px;
        border-top: 1px solid ${colors.bgColor};

        p {
          display: block;
        }
      }

      p {
        padding-left: 10px;
        padding-right: 10px;
        display: none;
        margin: 0;
        color: #eeee;
        font-weight: 200;
        /* text-align: center; */
        font-size: 0.8em;
      }
    }
  }
`

const StyledLink = styled(Link)`
  color: white;
  /* text-decoration: none; */
`

const ContactForm = () => {
  const handleFaqClick = (e) => {
    if (
      e.target.attributes.id.value !== "" &&
      e.target.attributes.id.value !== null
    ) {
      if (e.target.attributes.id.value === faq1.current.attributes.id.value) {
        faq1.current.classList.toggle("show")
      } else if (
        e.target.attributes.id.value === faq2.current.attributes.id.value
      ) {
        faq2.current.classList.toggle("show")
      } else if (
        e.target.attributes.id.value === faq3.current.attributes.id.value
      ) {
        faq3.current.classList.toggle("show")
      } else if (
        e.target.attributes.id.value === faq4.current.attributes.id.value
      ) {
        faq4.current.classList.toggle("show")
      } else if (
        e.target.attributes.id.value === faq5.current.attributes.id.value
      ) {
        faq5.current.classList.toggle("show")
      } else if (
        e.target.attributes.id.value === faq6.current.attributes.id.value
      ) {
        faq6.current.classList.toggle("show")
      }
    }
  }

  const faq1 = useRef("faq-item1")
  const faq2 = useRef("faq-item2")
  const faq3 = useRef("faq-item3")
  const faq4 = useRef("faq-item4")
  const faq5 = useRef("faq-item5")
  const faq6 = useRef("faq-item6")

  return (
    <>
      <GlobalStyles />
      <ContactBox>
        <form
          action="https://formsubmit.co/danielgonzalezt13@gmail.com"
          method="POST"
        >
          <header>
            <h1>Contact Us</h1>
            <p>
              Feel free to contact us! Our team will respond your ticket within
              a maximum period of 48 Hours
            </p>
          </header>
          <div className="name__tlf-box">
            <input type="text" placeholder="Enter Your Name" name="name" />
            <input type="text" placeholder="Enter your tlf" name="tlf" />
          </div>
          <div className="email-box">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your Email"
            />
          </div>
          <div className="message-box">
            <textarea name="message" id=""></textarea>
          </div>
          <div className="submit-box">
            <input type="submit" value="SEND MESSAGE" />
          </div>
        </form>
      </ContactBox>
      <FaqBox>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item1">
            <h1 id="faq-item1">What's the Flow Movie Price?</h1>
          </header>
          <main id="faq-item1" ref={faq1}>
            <p>Flow Movie plans are starting by 7,99$ monthly</p>
          </main>
        </div>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item2">
            <h1 id="faq-item2">How many devices can i connect?</h1>
          </header>
          <main id="faq-item2" ref={faq2}>
            <p>
              With the starter plan, you can connect 3 devices at the same time
            </p>
          </main>
        </div>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item3">
            <h1 id="faq-item3">Can i download movies?</h1>
          </header>
          <main id="faq-item3" ref={faq3}>
            <p>Yes, with the standard plan, you can download every movie</p>
          </main>
        </div>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item4">
            <h1 id="faq-item4">What is the free trial?</h1>
          </header>
          <main id="faq-item4" ref={faq4}>
            <p>
              We are giving every user a 14 days free trial so they can test our
              app
            </p>
          </main>
        </div>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item5">
            <h1 id="faq-item5">How can i reset my password?</h1>
          </header>
          <main id="faq-item5" ref={faq5}>
            <p>
              Go to account settings or contact us{" "}
              <StyledLink to="/contactus">here</StyledLink>
            </p>
          </main>
        </div>
        <div className="faq-item">
          <header onClick={handleFaqClick} id="faq-item6 ">
            <h1 id="faq-item6 ">Can you delete my account?</h1>
          </header>
          <main id="faq-item6 " ref={faq6}>
            <p>
              Please, contact us for deleting your account{" "}
              <StyledLink to="/contactus">here</StyledLink>
            </p>
          </main>
        </div>
        <div className="faq-item">
          <div className="search-item">
            <input type="text" placeholder="Search your problem" />
            <img src="https://img.icons8.com/ios/452/search--v1.png" alt="" />
          </div>
        </div>
      </FaqBox>
    </>
  )
}

export default ContactForm
