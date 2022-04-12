import React from 'react';
import styled from 'styled-components';

function section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order online for Touchless Delivery</p>
            </ItemText>
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
`