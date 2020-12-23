import React from "react"
import styled from 'styled-components'
import TestimonialCard from './testCard'
import Carousel from 'react-elastic-carousel';
import { UseImages } from "./images"
import "./styles.css"


const MainDiv = styled.div`
    width: 100%;
    background: #F2F2F1;
    padding-bottom: 1rem;

    h3 {
        text-align: center;
        line-height: 1.2;
        padding: 1em 1em 0.5em 1em;
        font-size: 2.8rem;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
    }
`

const TestContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem auto;

`

const Testimonials = () => {
    const {koriImage, noImageGirl, noImageBoy} = UseImages();
    const Tests = [
        (
            <TestContainer>

                <TestimonialCard
                    message="I really enjoy doing charity, for a good cause, it's like the least I can do, I really enjoy that stuff. I enjoy giving back."
                    name="Kori"
                    position="Media Leader"
                    image={koriImage}
                />
                <TestimonialCard
                    message="The name 'Reflect It Back' comes from the idea of not only giving back but also seeing yourself in someone else."
                    name="Limo Allan"
                    position="Member"
                    image={noImageBoy}
                />
            </TestContainer>
        ),
        (
            <TestContainer>
                    <TestimonialCard
                        message="I'm very fortunate to have been raised in my family. I learned early about the importance of giving back."
                        position="Member"
                        name="Mitch"
                        image={noImageGirl}
                    />
                    <TestimonialCard
                        message="We make a living by what we get. We make a life by what we give."
                        name="Collins Macharia"
                        position="Member"
                        image={noImageBoy}
                    />
            </TestContainer>
        ),
        (
            <TestContainer>
                    <TestimonialCard
                        message="Once you start getting into giving back, it gets addictive."
                        position="Member"
                        name="Edwin Jomo"
                        image={noImageBoy}
                    />
                    <TestimonialCard
                        message="Giving back is something that comes from the heart to me. It's not that I do it because it's the right thing: I do it because I want do it."
                        position="Cofounder"
                        name="Irene"
                        image={noImageGirl}
                    />
            </TestContainer>
        ),
        (
            <TestContainer>
                    <TestimonialCard
                        message="We must give more in order to get more. It is the generous giving of ourselves that produces the generous harvest."
                        name="d3"
                        image={noImageBoy}
                        position="Member"
                    />
            </TestContainer>
        )
    ]

    return (
        <MainDiv>
            <h3>Testimonials</h3>
            <Carousel
            enableAutoPlay
            autoPlaySpeed={5000}
            >
                {Tests.map(test => <div> {test} </div>)}
            </Carousel>
        </MainDiv>
    )
}

export default Testimonials