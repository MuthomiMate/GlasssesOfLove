import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    background-color: #F2F2F1;
    height: 30rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3 {
        line-height: 1.2;
        margin-bottom: .6em;
        color: #00bfad;
        font-size: 2.15rem;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
    }
    p {
        font-size: 102%;
        max-width: 42em;
        margin: 0 auto 1em;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
    }
`
const Reason = () => {
    return (
        <StyledDiv>
            <div>
                <h3>
                    Over a billion people live in slums.
                </h3>
                <p>
                    That’s 14% of the world’s population. Put another way, that's 1 in 8 people alive today living without hope amongst trash, sewage, drugs, and abuse in unimaginable conditions. Life without secure housing is a life without basic needs being met. Families living without safety, stability, education and nutrition lack dignity and hope for the future.
                </p>
            </div>
        </StyledDiv>
    )
}

const StyledReason = styled(Reason)`
    background-color: #F2F2F1;
    height: 30rem;
    margin: auto;
`
export default StyledReason