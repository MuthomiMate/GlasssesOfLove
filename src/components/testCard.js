import React from 'react'
import styled from 'styled-components'
import { FaQuoteLeft } from 'react-icons/fa'
import Avatar from './avatar'


const MainDiv = styled.div`
    max-width: 500px;
`

const CardDiv = styled.div`
    background: #121B22;
    display: flex;
    margin: .5rem;
    position: relative;
    min-height: 176px;

    @media screen and (max-width: 1019px) {
        margin: 1rem;
    }

    p {
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 400;
        margin: 3rem 1rem 1rem;
    }
`
const AvatarDiv = styled.div`
    position: absolute;
    margin-top: -26.5px;
    width: 100%;
    display: flex;
    justify-content: center;
`
const DetailsDiv = styled.div`
    text-align: center;

    h5 {
        font-weight: 500;
        margin: 0;
    }
    h4 {
        font-weight: 500;
        margin: .5rem 0;
        color: #F19002
    }
`


const TestimonialCard = ({message, name, image, position}) => {
    return (
        <MainDiv>
            <CardDiv>
                <AvatarDiv>
                    <Avatar image={image} />
                </AvatarDiv>
                <div style={{height: "2em", width: "2em", marginLeft: ".2rem"}}>
                    <FaQuoteLeft color="#FFFFFF" size="2em" />
                </div>
                <p>{message}</p>
            </CardDiv>
            <DetailsDiv>
                <h5>{name}</h5>
                <h4> {position} </h4>
            </DetailsDiv>
        </MainDiv>
    )
}

export default TestimonialCard