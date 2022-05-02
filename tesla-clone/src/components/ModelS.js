import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ModelS() {
  return (
    <Container>

        <ModelSSection>
            <Fade bottom>
                <Title>
                    <h1>Model S</h1>
                    <span>Plaid</span>
                </Title>
            </Fade>

            <Details>
                <Fade left>
                    <Stats>
                        <h2>396 mi</h2>
                        <span>Range (EPA est.)</span>
                    </Stats>

                    <Stats>
                        <h2>1.99 s</h2>
                        <span>0-60 mph*</span>
                    </Stats>

                    <Stats>
                        <h2>200 mph</h2>
                        <span>Top Speed†</span>
                    </Stats>
                    
                    <Stats>
                        <h2>1,020 hp</h2>
                        <span>Peak Power</span>
                    </Stats>
                    
                    <Stats>
                        <button>ORDER NOW</button>
                    </Stats>

                </Fade>
            </Details>

        </ModelSSection>

        <FadeTop/>

        <InteriorTitle>
            <h1>Interior of the Future</h1>
        </InteriorTitle>

        <InteriorSection/>
            

    </Container>
  )
}

export default ModelS;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ModelSSection = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");  
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
    width: 65%;
    margin-top: 56vh;
    justify-content: space-around;
`

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

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
        font-size: 13px;
        color: white;
        font-weight: 500;
        padding: 10px 56px;
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
    width: 150%;
    padding: 0 100px;
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

 const InteriorSection = styled(ModelSSection)`
    background-image: url("/images/new-interior.jpg");
`