import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Model3Y({title, bgimg, range, stat}) {
  return (
    <Container>

      <ModelSection bgimg={bgimg}>
        <Fade bottom>
          <Title>
            <h1>{title}</h1>
          </Title>
        </Fade>

        <Details>
          <Fade left>
            <Stats>
              <h2>{stat} {title === "Model 3" ? 's' : 'cu ft'}</h2>
              <span>{title === "Model 3" ? '0-60 mph*' : 'Cargo Space'}</span>
            </Stats>

            <Stats>
              <h2>{range} mi</h2>
              <span>Range (EPA est.)</span>
            </Stats>

            <Stats>
              <h2>AWD</h2>
              <span>Dual Motor</span>
            </Stats>
            
            <Stats>
              <button>ORDER NOW</button>
            </Stats>

          </Fade>
        </Details>

        <DownArrow src='/images/down-arrow.svg'/>

      </ModelSection>

      <Safety>

        
          <SafetyImg>
            <Fade bottom>
              <img src="/images/safety.png" alt="Safety" />
            </Fade>
          </SafetyImg>
        

          <SafetyInfo>
            <Fade bottom>
              <SafetyText>
                <h3>Safety</h3>
                <h1>Built for Safety</h1>

                <p> 
                  Safety is the most important part of every Tesla. We design our vehicles 
                  to <span>exceed safety standards</span>.
                </p>

                <h2>5-Star Rating</h2>
                <p>
                  Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.
                </p>

                <h2>Top Safety Pick+</h2>
                <p>
                  Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all 
                  crashworthiness and front crash prevention categories.
                </p>
              </SafetyText>

              <SafetyBtns>
                <PlusBtn>
                  <button>+</button> <span>LEARN MORE</span>
                </PlusBtn>

                <OrderBtn>
                  <button>ORDER NOW</button>
                </OrderBtn>
              </SafetyBtns>
            </Fade>
          </SafetyInfo>
        

      </Safety>                    

    </Container>
  )
}

export default Model3Y;

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
    margin-top: 58vh;
    justify-content: space-between;
`

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6px;

    h2 {
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 28px;
    }

    span {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.6px;
    }

    button {
      background-color: #121314;
      border: 3px solid black;
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

const DownArrow = styled.img`
  heigth: 10px;
  width: 30px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  padding-top: 20px;
`

const Safety = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;  
`

const SafetyImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 75%;
  
  img {
    height: 78%;
    width: 85%;
  }
`

const SafetyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 25%;
  padding: 50px 0;
`

const SafetyText = styled.div`
  text-align: left; 
  width: 90%;

  h3 {
    font-weight: 200;
    padding-bottom: 10px;
  }

  h1 {
    font-weight: 500;
    font-size: 30px;
    padding-bottom: 20px;
  }

  h2 {
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 20px;
    font-size: 16px;
  }

  span {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;

    &:hover {
      text-decoration-thickness: 3px;
    }
  }

`

const SafetyBtns = styled.div`
  display: flex;
  align-items: center;
`

const PlusBtn = styled.div`
  padding-right: 10px;
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: 3px solid black;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    padding-left: 10px;
  }

  &:hover {

    button {
      background-color: black;
      color: white;
    }
  }
`

const OrderBtn = styled.div`
   button {
    background-color: transparent;
    border: 3px solid black;
    border-radius: 20px;
    font-size: 12px;
    color: black;
    font-weight: 500;
    padding: 10px 54px;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`