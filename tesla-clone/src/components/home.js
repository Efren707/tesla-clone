import React from 'react';
import styled from 'styled-components';
import Section from './section';

function home() {
  return (
    <Container>

        <Section title="Model S" description="Order Online for " backgroundImg="model-s.jpg" 
        leftBtnText="Custom order" rightBtnText="Existing inventory" />

        <Section title="Model 3" description="Order Online for " backgroundImg="model-3.jpg" 
        leftBtnText="Custom order" rightBtnText="Existing inventory" />

        <Section title="Model X" description="Order Online for " backgroundImg="model-x.jpg" 
        leftBtnText="Custom order" rightBtnText="Existing inventory" />
        
        <Section title="Model Y" description="Order Online for " backgroundImg="model-y.jpg" 
        leftBtnText="Custom order" rightBtnText="Existing inventory" />

        <Section title="Lowest Cost Solar Panels in America" description="Money back guaranteed" 
        backgroundImg="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn more" />

        <Section title="Solar for New Roofs" description="Solar roof cost less than a new roof" 
        backgroundImg="solar-roof.jpg" leftBtnText="Order Now" rightBtnText="Learn more" />
        
        <Section title="Accessories" 
        backgroundImg="accessories.jpg" leftBtnText="Shop Now" rightBtnText="" />

    </Container>
  )
}

export default home

const Container = styled.div`
  height: 100vh;
`