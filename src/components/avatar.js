import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'

const MainDiv = styled.div`
`

const Avatar = ({image}) => {

    return (
        <MainDiv>
            <Img style={{width: "75px", height: "75px", borderRadius: "50%"}} fluid={image.childImageSharp.fluid} />
        </MainDiv>
    )
}

export default Avatar;
