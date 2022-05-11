import React, {useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';

function Navbar() {

  const [dropStatus, setDropStatus] = useState(false);
  
  return (
    <Container>

      <Logo>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Logo>

      <Menu>
        <a href="models" >Model S</a>
        <a href="model3" >Model 3</a>
        <a href="modelx" >Model X</a>
        <a href="modely" >Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a onClick={() => setDropStatus(true)}>Menu</a>
      </RightMenu>

      

      <DropdownContainer show={dropStatus}>
        
      </DropdownContainer>
    
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  font-size: 14px;
  letter-spacing: 0.7px;
  backdrop-filter: blur(2px);
`

const Logo = styled.div`
  cursor: pointer;
  width: 230px;

  img {
    height: 16px;
    width: 130px;
  }
`

const Menu = styled.div`
  display: flex;
  width: 580px;
  align-items: center;
  justify-content: space-between;
  
  a {
    font-weight: 500;
    flex-wrap: nowrap;
    border-radius: 12px;
    background-color: transparent;
    transition: ease-in-out 0.45s;
    padding: 10px 12px;
    
    &:hover {
      background-color: rgba(80, 80, 80, 0.1);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 500;
    padding: 8px 15px;
    flex-wrap: nowrap;
    border-radius: 12px;
    transition: color .33s ease,background-color .33s ease;
    
    &:hover {
      background-color: rgba(80, 80, 80, 0.1);
    }
  }
`

const DropdownNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  height: 100vh;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.5s;
  
  li {
    margin: 5px;
    padding: 10px 25px;
    border-radius: 12px;
    transition: color .33s ease,background-color .33s ease;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(80, 80, 80, 0.1);
    }
  }

`

const DropdownList = styled.div` 
`

const Globe = styled.li`
  display: flex;
`

const GlobeImg = styled(LanguageIcon)`
  height: 15px;
`

const GlobeText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px; 
  padding-top: 3px;

  span {
    padding-top: 3px;
    color: gray;
    font-size: 12px;
    transition: 0.5s;

    &:hover {
      color: #000;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 3px;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
` 

const DropdownContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none' };
  border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`