import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    background-color: #F2F2F1;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3 {
        line-height: 1.2;
        margin: 0 auto .6em;
        max-width: 34em;
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
const DetailsDiv = styled.div`
    margin: 5rem 0;
`
const Reason = () => {
    return (
        <StyledDiv>
            <DetailsDiv>
                <h3>
                Today's society is packed with children who are growing up without parental love and care.
                </h3>
                <p>
                This leads to quite a number of problems  in their day to day lives. Our goal is to ensure that they never feel they are alone. This we do through our mentorship program that we hold in each and every visit we conduct. The goal is to share love and brightness to a little soul. Aside from the mentorship, we ensure that a child has basic needs through our care package that we distribute in our visits. We come together as a society to make this happen.
                </p>
            </DetailsDiv>
        </StyledDiv>
    )
}

const StyledReason = styled(Reason)`
    background-color: #F2F2F1;
    height: 30rem;
    margin: auto;
`
export default StyledReason