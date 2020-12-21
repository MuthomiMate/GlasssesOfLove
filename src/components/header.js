import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import logo from "../images/icon.png";
import logoBright from "../images/icon-white.png"
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      showMobileMenu: false
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleMobileMenu = () => {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
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
    const StyledHeader = styled.div`
      transition: background 0.5s ease;
      background: ${props => (props.hideBackground ? "#FFFFFF" : "transparent")};
      margin-bottom: 1.45rem;
      box-shadow:  ${props => (props.hideBackground ? "0 1px 1px rgba(0,0,0,.1)" : "none")};
      position: fixed;
      width: 100%;
      z-index: 100;
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
        margin: auto 0;
      }
    `
  const Nav = styled.div`
    @media screen and (max-width: 850px) {
      display: none;
    }
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

  const StyledBars = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
      display: block;
    }
  `
  const MobileDiv = styled.div`
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    color: #FFFFFF;

    @media screen and (min-width: 600px) {
      font-size: 24px;
    }

    ul {
      list-style-type: none;
    }
    span {
      position: absolute;
      top: 0;
      right: .5em;
      font-size: 36px;

      @media screen and (min-width: 600px) {
        font-size: 45px;
      }
    }
  `
  const StyledLink = styled(({ hideBackground, ...rest}) => <Link {...rest} />)`
    transition: color 0.5s ease;
    color: ${props => (props.hideBackground ?"#adbcbb" : "#FFFFFF")};
    text-decoration: none;
  `
  const { showMobileMenu } = this.state;
    return (
      <StyledHeader hideBackground={hideBackground}>
        <StyledDiv>
          <a href="http://www.glassesoflove.or.ke">
            <img src={hideBackground ? logo : logoBright} alt="Logo" />
          </a>
          <StyledBars onClick={this.toggleMobileMenu}>
            <FaBars color={hideBackground ? "#000000" : "#FFFFFF"} size="2em" />
          </StyledBars>
          <Nav hideBackground={hideBackground}>
            <ul>
            <li> <StyledLink to="/" hideBackground={hideBackground}>Home</StyledLink></li>
            <li> <StyledLink to="/about" hideBackground={hideBackground}>About Us</StyledLink></li>
            <li> <StyledLink to="/coming-soon" hideBackground={hideBackground}>Contact Us</StyledLink> </li>
            </ul>
          </Nav>
        </StyledDiv>
        {showMobileMenu && (
        <MobileDiv>
          <span>
            <MdClose color="plain" onClick={this.toggleMobileMenu} />
          </span>
          <ul>
          <li> <StyledLink to="/">Home</StyledLink></li>
          <li> <StyledLink to="/about">About Us</StyledLink></li>
          <li> <StyledLink to="/coming-soon">Contact Us</StyledLink> </li>
          </ul>
      </MobileDiv>
        )}
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
