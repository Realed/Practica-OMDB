import React from "react"
import styled from "styled-components"

const GoogleBtnWrapper = styled.div`
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
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  p {
    font-weight: 200;
  }
`
const GoogleBtn = ({ handleLogIn }) => {
  return (
    <>
      <GoogleBtnWrapper onClick={handleLogIn}>
        <img
          src="https://www.prosistel.es/wp-content/uploads/2019/12/goole-g-suit-icon.png"
          alt="googleimage"
        />
        <p>Sign in With Google</p>
      </GoogleBtnWrapper>
    </>
  )
}

export default GoogleBtn
