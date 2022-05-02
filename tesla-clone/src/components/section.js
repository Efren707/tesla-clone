import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function section({title, description, backgroundImg, leftBtnText, rightBtnText}) {

    let descriptionLink;

    if(description && description === "Order Online for ") {
        descriptionLink = "Touchless delivery";
    }

    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description} <span>{descriptionLink}</span></p>
            </ItemText>

            </Fade>

            <Buttons>
                <Fade bottom>

                    <ButtonGroup>

                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        
                        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                        
                    </ButtonGroup>
                
                </Fade>

                <DownArrow src='/images/down-arrow.svg'/>
                
            </Buttons>

        </Wrap>
  )
}

export default section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        font-weight: 500;
        font-size: 42px;
        padding-bottom: 10px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }

    span {
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-thickness: 1px;
        cursor: pointer;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,08);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    heigth: 10px;
    width: 30px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`