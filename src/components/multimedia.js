import React from "react";
import styled from "styled-components"

const MainDiv = styled.div`
    background: #03BFAD;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;
`

const Multimedia = () => {
    return(
        <MainDiv role="img" aria-label="Image Description">
            <div>
                COMING SOON
            </div>
        </MainDiv>
    )
}
export default Multimedia;