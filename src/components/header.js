import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import logo from "../images/icon.png";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
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
    console.log(currentScrollPos);
    this.setState({
      scrollY: currentScrollPos
    })
  }
  render(){
    const { scrollY } = this.state;
    const hideBackground = scrollY > 60;
    console.log(scrollY, hideBackground);
    const StyledHeader = styled.div`
      transition: background 0.5s ease;
      background: ${props => (props.hideBackground ? "#FFFFFF" : "transparent")};
      margin-bottom: 1.45rem;
      box-shadow:  ${props => (props.hideBackground ? "0 1px 1px rgba(0,0,0,.1)" : "none")};
      position: fixed;
      height: 5em;
      width: 100%;
      z-index: 10;
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
      color: ${props => (props.hideBackground ?"#adbcbb" : "#FFFFFF")};
      font-size: 150%;
      margin-bottom: 0;
    }
    li {
      padding: 0 15px;
      margin-bottom: 0;
    }
  `
  const StyledLink = styled(({ hideBackground, ...rest}) => <Link {...rest} />)`
    transition: color 0.5s ease;
    color: ${props => (props.hideBackground ?"#adbcbb" : "#FFFFFF")};
    text-decoration: none;
  `
    return (
      <StyledHeader hideBackground={hideBackground}>
        <StyledDiv>
          <a href="http://www.glassesoflove.or.ke">
            <img src={logo} alt="Logo" />
          </a>
          <Nav hideBackground={hideBackground}>
            <ul>
            <li> <StyledLink to="/" hideBackground={hideBackground}>Home</StyledLink></li>
            <li>Project</li>
            <li>Testmonial</li>
            <li> <StyledLink to="/about" hideBackground={hideBackground}>About Us</StyledLink></li>
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
