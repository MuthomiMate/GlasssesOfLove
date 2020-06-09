import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #00BFAD;
    height: 35rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 575px) {
        height: 40rem;
    }
    @media screen and (max-width: 500px) {
        height: 45rem;
    }
    @media screen and (max-width: 475px) {
        height: 50rem;
    }

    h3 {
        line-height: 69.888px;
        margin-bottom: .6em;
        font-size: 58.24px;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;

        @media screen and (max-width: 420px) {
            font-size: 35px;
        }
    }
    p {
        font-size: 21.216px;
        font-weight: 400;
        line-height: 33.9456px;
        max-width: 42em;
        margin: 0 auto 1em;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;

        @media screen and (max-width: 420px) {
            font-size: 18px;
        }
    }
`

const TextDiv = styled.div`
    height: 70%;
    margin: auto;

    @media screen and (max-width: 420px) {
        height: 90%;
    }
`

const companyInfo = () => {
    return (
        <StyledDiv>
            <TextDiv>
                <h3>
                    Who We Are
                </h3>
                <p>
                    That’s 14% of the world’s population. Put another way, that's 1 in 8 people alive today living without hope amongst trash, sewage, drugs, and abuse in unimaginable conditions. Life without secure housing is a life without basic needs being met. Families living without safety, stability, education and nutrition lack dignity and hope for the future.
                </p>
                <p>
                    That’s 14% of the world’s population. Put another way, that's 1 in 8 people alive today living without hope amongst trash, sewage, drugs, and abuse in unimaginable conditions. Life without secure housing is a life without basic needs being met. Families living without safety, stability, education and nutrition lack dignity and hope for the future.
                </p>
            </TextDiv>
        </StyledDiv>
    )
}

export default companyInfo;