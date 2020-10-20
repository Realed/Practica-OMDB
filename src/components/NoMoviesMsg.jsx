import React from "react"
import styled from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 30px; */
  padding-top: ${({ paddingtop }) => (paddingtop ? paddingtop : "30px")};

  h1 {
    margin: 0;
    color: white;
    font-size: 1.3em;
    margin-top: 10px;
    font-family: ${fontFamily.accent};
    font-weight: 600;
    text-decoration: ${colors.bgColor} underline;
  }
`

const NoMoviesMsg = ({ text, paddingtop }) => {
  return (
    <>
      <Wrapper paddingtop={paddingtop}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/1200px-Exclamation_mark_white_icon.svg.png"
          alt=""
          width="50px"
          height="50px"
        />
        <h1>{text}</h1>
      </Wrapper>
    </>
  )
}

export default NoMoviesMsg
