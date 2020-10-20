import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { NavLink } from "react-router-dom"

import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"
import StyledLink from "./StyledLink"

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
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
    text-decoration: ${colors.bgColor} underline;
    font-size: 1.45em;
  }

  &:hover {
    color: ${colors.bgColor};
  }
`

const NavMenu = () => {
  return (
    <>
      <GlobalStyles />
      <MenuWrapper>
        <div className="menu-box">
          <div className="img-box">
            <img src="https://i.imgur.com/gre6uLf.png" alt="logo" />
          </div>
          <Menu className="menu">
            <MenuLink to="/home">HOME</MenuLink>
            <MenuLink to="/movies">MOVIES</MenuLink>
            <MenuLink to="contactus">CONTACT US</MenuLink>
          </Menu>
          <div className="register-btn">
            <StyledLink width="127px" height="35px" size="1em" to="/register">
              Upgrade PRO
            </StyledLink>
          </div>
        </div>
      </MenuWrapper>
    </>
  )
}

export default NavMenu
