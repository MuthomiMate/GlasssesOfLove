import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/icon.png";

const StyledHeader = styled.div`
  background: #FFFFFF;
  margin-bottom: 1.45rem;
  position: absolute;
  width: 100%
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.45rem 1.0875rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  img {
    height: 4rem;
    width: 9.75rem;
    margin: auto 0;
  }
`
const Nav = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 600;
    color: #adbcbb;
    font-size: 150%;
    margin-bottom: 0;
  }
  li {
    padding: 0 15px;
    margin-bottom: 0;
  }
`
const Header = ({ siteTitle }) => (
  <StyledHeader
  >
    <StyledDiv>
      <a href="http://www.glassesoflove.or.ke">
        <img src={logo} alt="Logo" />
      </a>
      <Nav>
        <ul>
        <li>Home</li>
        <li>Project</li>
        <li>Testmonial</li>
        <li>Blog</li>
        <li>Contact Us</li>
        </ul>
      </Nav>
    </StyledDiv>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
