import React from 'react';
import styled from 'styled-components';
import Section from './section';
import modelS from '../images/model-3.jpg';
import model3 from '../images/model-s.jpg';
import modelX from '../images/model-x.jpg';
import modelY from '../images/model-y.jpg';
import solarPanel from '../images/solar-panel.jpg';
import solarRoof from '../images/solar-roof.jpg';
import accessories from '../images/accessories.jpg';

function home() {
  return (
    <Container>

      <Section title="Model 3" description="Order Online for " backgroundImg={model3} 
      leftBtnText="Custom order" rightBtnText="Existing inventory" />

      <Section title="Model Y" description="Order Online for " backgroundImg={modelY} 
      leftBtnText="Custom order" rightBtnText="Existing inventory" />
        
      <Section title="Model S" description="Order Online for " backgroundImg={modelS} 
      leftBtnText="Custom order" rightBtnText="Existing inventory" />

      <Section title="Model X" description="Order Online for " backgroundImg={modelX} 
      leftBtnText="Custom order" rightBtnText="Existing inventory" />
      
      <Section title="Lowest Cost Solar Panels in America" description="Money back guaranteed" 
      backgroundImg={solarPanel} leftBtnText="Order Now" rightBtnText="Learn more" />

      <Section title="Solar for New Roofs" description="Solar roof cost less than a new roof" 
      backgroundImg={solarRoof} leftBtnText="Order Now" rightBtnText="Learn more" />
      
      <Section title="Accessories" 
      backgroundImg={accessories} leftBtnText="Shop Now" rightBtnText="" />

    </Container>
  )
}

export default home

const Container = styled.div`
  height: 100vh;
`