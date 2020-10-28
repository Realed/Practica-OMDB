import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import fontFamily from "../styles/fontfamily"
import firebase from "../firebase"
import colors from "../styles/colors"

//COMPONENTS
import GlobalStyles from "./GlobalStyles"

const MenuWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #333;
  display: flex;

  .menu-box {
    width: 60%;
    min-width: 750px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    .img-box {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 70%;
        max-height: 70%;
      }
    }

    .menu {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .register-btn {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        margin-right: 20px;
        max-width: 65%;
        max-height: 60%;
      }
    }
  }
`

const Menu = styled.div`
  width: 60%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #eee;
  font-family: ${fontFamily.accent};
  font-size: 1.4em;

  &.active {
    color: ${colors.bgColor};
    font-size: 1.45em;
  }

  &:hover {
    color: ${colors.bgColor};
  }
`

const NavMenu = () => {
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      })
  }

  return (
    <>
      <GlobalStyles />
      <MenuWrapper>
        <div className="menu-box">
          <div className="img-box">
            <img src="https://i.imgur.com/gre6uLf.png" alt="logo" />
          </div>
          <Menu className="menu">
            <MenuLink exact to="/home">
              HOME
            </MenuLink>
            <MenuLink exact to="/movies">
              MOVIES
            </MenuLink>
            <MenuLink exact to="/contactus">
              CONTACT US
            </MenuLink>
          </Menu>
          <div className="register-btn">
            {/* <StyledLink width="127px" height="35px" size="1em" to="/register">
              Upgrade PRO
            </StyledLink> */}
            <NavLink exact to="/logout" onClick={handleLogOut}>
              <img
                src="https://lh3.googleusercontent.com/proxy/EKIf7aWgZvajkC1rYppObF8varkDR1vSJnA8kBvZW0T15_LI-EsSpMA7qvWwbNpnNpX1v6Jpsejo6YOPOWr6WqgcLQmo6KGI7aOZXDa6xJlcsUXUzg7FDPiyXCRf"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </MenuWrapper>
    </>
  )
}

export default NavMenu
