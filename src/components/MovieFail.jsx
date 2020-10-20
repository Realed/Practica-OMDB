import React from "react"
import styled, { css } from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"

const Wrapper = styled.div`
  ${({ disabled }) =>
    disabled &&
    css`
      display: none;
    `}

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

const MovieFail = ({ text, paddingtop, disabled }) => {
  return (
    <>
      <Wrapper paddingtop={paddingtop} disabled={disabled}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/White_alert_icon.svg/985px-White_alert_icon.svg.png"
          alt=""
          width="50px"
          height="50px"
        />
        <h1>{text}</h1>
      </Wrapper>
    </>
  )
}

export default MovieFail
