import React from "react"
import styled from "styled-components"
import fontFamily from "../styles/fontfamily"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import ContactForm from "../components/ContactForm"
//STYLES

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444;
  min-height: 93.6vh;
`

const ContactPage = ({ history }) => {
  return (
    <>
      <GlobalStyles />
      <NavMenu />
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </>
  )
}

export default ContactPage
