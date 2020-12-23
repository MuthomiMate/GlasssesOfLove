import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
    height: 5rem;
    background: #F19002;
`

const Section = styled.div`
    width: 60%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    @media screen and (max-width: 1100px) {
        width: 80%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    @media screen and (max-width: 430px) {
        align-items: center;
        flex-direction: column;
    }

    h4 {
        margin: auto 0;
        font-weight: 600;
        line-height: 26px;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        color: #fff
    }

    a {
        text-decoration: none;
    }
`

const SecondFooter = () => {
    return (
        <MainDiv>
            <Section>
                <h4>
                 <span>&copy;</span> 2020 Glasses Of Love
                </h4>
                <h4>
                    Designed by <a href="https://www.linkedin.com/in/muthomimate/" target="_blank" rel="noopener noreferrer">Muthomi Mate</a>
                </h4>
            </Section>
        </MainDiv>
    )
}

export default SecondFooter;
