import React, {useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  
  return (
    <Container>

      <Logo>
        <img src="/images/logo.svg" />
      </Logo>

      <Menu>
        {cars && cars.map((car, idx) => 
          <a href="#" key={idx}>{car}</a>

        )}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setBurgerStatus(true)}>Menu</a>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>

        {cars && cars.map((car, idx) => 
          <li key={idx}><a href="#">{car}</a></li>

        )}
        
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck Inventory</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging Stations</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 14px;
  letter-spacing: 0.7px;
`

const Logo = styled.div`
  cursor: pointer;
  img {
    height: 16px;
    width: 130px;
  }
`

const Menu = styled.div`
  display: flex;
  width: 650px;
  align-items: center;
  justify-content: space-between;
  
  a {
    font-weight: 500;
    padding: 8px 15px;
    flex-wrap: nowrap;
    border-radius: 12px;
    background-color: transparent;
    transition: ease-in-out 0.35s;
    
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

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.5s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    a {
      font-weight: 600;
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