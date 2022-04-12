import React from 'react';
import styled from 'styled-components';

function section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order online for Touchless Delivery</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>

                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg"/>
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
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
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
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`