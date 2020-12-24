import React from "react";
import styled from "styled-components"
import {IoIosMail, IoIosCall} from "react-icons/io"
import { FaRegClock } from "react-icons/fa"

const MainDiv = styled.div`
    background: #F19000;
    display: flex;
    padding: 10rem 0 3rem;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;

    @media screen and (max-width: 800px) {
        font-size: 32px;
    }

    input {
        border: 1px solid #131B22;
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.25;
        color: #464a4c;
        width: 100%;
        font-weight: 400;
        padding: .7rem;
        outline: none;
    }
    textarea {
        border: 1px solid #131B22;
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.25;
        color: #464a4c;
        width: 100%;
        font-weight: 400;
        padding: .7rem;
        outline: none;
    }
    button {
        background: #131B22;
        border: 1px solid #131B22;
        cursor: pointer;
        color: #fff;
        font-weight: normal;
        line-height: 1.25;
        text-align: center;
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        outline: none;
        border-radius: 0.3rem;
    }
`
const DetailsDiv = styled.div`
    min-width: 300px;
    background: #131B22;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-family: 'Lato', sans-serif;
    h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        margin: 2rem 0;
    }
    p {

        font-size: 18px;
        font-weight: 400;
        margin: 0 1rem 3rem;
    }
    span {
        font-weight: 300;
        font-size: 18px;
        margin-left: 1rem;
    }
`

const Multimedia = () => {
    return(
        <MainDiv role="img" aria-label="Image Description">
            <div>
                <h3>Contact Us</h3>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <form name="contacts" method="POST" data-netlify="true">
                        <div style={{minWidth: "300px", color: "#464a4c", margin: "0 .5rem"}}>
                            <input type="hidden" name="contacts" value="contacts"></input>
                            <input type="text" name="firstName" id="name" placeholder="First Name" required/>
                            <input type="text" name="lastName" id="lname" placeholder="Last Name" required/>
                            <input type="email" name="email" id="email" placeholder="Email" required/>
                            <textarea name="message" id="Message" rows="8" placeholder="Message" required/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <DetailsDiv>
                    <h3>Contact Details</h3>
                    <p>Please find below contact details and contact us today!</p>
                    <div style={{display: "flex", alignItems: "center", margin: "1rem"}}>
                    <IoIosCall color="#F19000" size="1.6rem"/> <span>+254 718 612 282 / +254 719 150 262</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: "1rem"}}>
                    <IoIosMail color="#F19000" size="1.6rem"/> <span>info@glassesoflove.or.ke / glassesoflove@gmail.com </span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: "1rem"}}>
                    <FaRegClock color="#F19000" size="1.6rem"/> <span>8:00 a.m - 9:00 p.m</span>
                    </div>
                    </DetailsDiv>
                </div>
            </div>
        </MainDiv>
    )
}
export default Multimedia;