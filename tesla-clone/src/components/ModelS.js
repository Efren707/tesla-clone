import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ModelSX({title, bgimg, range, zerotosixty, topSpeed, hp}) {
  return (
    <Container>

        <ModelSection bgimg={bgimg}>
            <Fade bottom>
                <Title>
                    <h1>{title}</h1>
                    <span>Plaid</span>
                </Title>
            </Fade>

            <Details>
                <Fade left>
                    <Stats>
                        <h2>{range} mi</h2>
                        <span>Range (EPA est.)</span>
                    </Stats>

                    <Stats>
                        <h2>{zerotosixty} s</h2>
                        <span>0-60 mph*</span>
                    </Stats>

                    <Stats>
                        <h2>{topSpeed} mph</h2>
                        <span>Top Speed†</span>
                    </Stats>
                    
                    <Stats>
                        <h2>{hp} hp</h2>
                        <span>Peak Power</span>
                    </Stats>
                    
                    <Stats>
                        <button>ORDER NOW</button>
                    </Stats>

                </Fade>
            </Details>

        </ModelSection>

        <FadeTop/>

        <InteriorTitle>
            <h1>Interior of the Future</h1>
        </InteriorTitle>

        <InteriorSection/>
                    

    </Container>
  )
}

export default ModelSX;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ModelSection = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgimg}")`};  
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    padding-top: 17vh;

    h1 {
        font-weight: 500;
        font-size: 40px;
        padding-bottom: 10px;
    }

    span {
        font-size: 18px;
        font-weight: 400;
    }
`

const Details = styled.div`
    display: flex;
    width: 60%;
    margin-top: 56vh;
    justify-content: space-between;
`

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6px;

    h2 {
        color: white;
        padding-bottom: 10px;
        font-weight: 500;
        font-size: 28px;
    }

    span {
        color: white;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.6px;
    }

    button {
        background-color: transparent;
        border: 3px solid white;
        border-radius: 20px;
        font-size: 12px;
        color: white;
        font-weight: 500;
        padding: 10px 54px;
        cursor: pointer;

        &:hover {
            background-color: white;
            color: black;
        }
    }
`

const FadeTop = styled.div`
    width: 150%;
    height: 10vh;
    background-color: black;
    filter: drop-shadow(0 -40px 22px black);
`

const InteriorTitle = styled.div`
    height: 10vh;
    width: 170%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 30px 12px black);

    h1 {
        color: white;
        font-weight: 500;
        padding-bottom: 100px;
    }
`

 const InteriorSection = styled(ModelSection)`
    background-image: url("/images/new-interior.jpg");
`