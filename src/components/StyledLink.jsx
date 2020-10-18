import styled from "styled-components"
import fontFamily from "../styles/fontfamily"
import colors from "../styles/colors"
import { Link } from "react-router-dom"

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

export default StyledLink
