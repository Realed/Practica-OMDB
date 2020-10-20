import styled, { css } from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  border: none;
  background-color: ${colors.bgColor};
  width: 140px;
  height: 50px;
  border-radius: 5px 0 5px 5px;
  font-size: 1.2em;
  color: white;
  font-family: ${fontFamily.accent};
  cursor: pointer;
  border: 2px solid ${colors.bgColor};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ size }) => size};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  &:hover {
    color: ${colors.bgColor};
    background-color: transparent;
  }
`

export default StyledLink
