import React from 'react';
import styled from 'styled-components';
import Section from './section';

function home() {
  return (
      <Container>
          <Section/>
      </Container>
  )
}

export default home

const Container = styled.div`
    height: 100vh;
`