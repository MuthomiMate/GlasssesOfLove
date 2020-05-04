import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import logo from "../images/icon.png";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: window.pageYOffset
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    this.setState({
      scrollY: currentScrollPos
    })
  }
  render(){
    const { scrollY } = this.state;
    const hideBackground = scrollY > 60;
    const setToFixed = scrollY > 150;
    const StyledHeader = styled.div`
      transition: background 0.5s ease;
      background: ${hideBackground ? "#FFFFFF" : "transparent"};
      margin-bottom: 1.45rem;
      position: fixed;
      height: 5em;
      width: 100%;
      z-index: 9;
    `
    const StyledDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;

      a {
        margin-top: 10px;
      }

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
      transition: color 0.5s ease;
      color: ${hideBackground ? "#adbcbb" : "#FFFFFF"};
      font-size: 150%;
      margin-bottom: 0;
    }
    li {
      padding: 0 15px;
      margin-bottom: 0;
    }
  `
    return (
      <StyledHeader>
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
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
