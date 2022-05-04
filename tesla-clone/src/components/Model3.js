import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import MessageIcon from '@material-ui/icons/Message';
import CloseIcon from '@material-ui/icons/Close';

import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

function Model3Y({title, bgimg, range, stat}) {

  const [dropStatus, setDropStatus] = useState(false);

  const QuestionFormSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNum: Yup.string().required('Phone Number is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    receiveUpdates: Yup.string().required(),
  })

  const validNumber = (number) => {

    let res = true;
    let nums =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < number.length; i++) {
      if (!nums.includes(number[i])) {
        res = false;
      }
    }

    return res;
  }

  const validZip = (zip) => {

    let res = true;
    let nums =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < zip.length; i++) {
      if (!nums.includes(zip[i])) {
        res = false;
      }
    }

    return res;
  }

  return (
    <Container>
      
      <Question>
        <button onClick={() => setDropStatus(true)}><MessageIcon/></button>
      </Question>

      <QuestionDropdown show={dropStatus}>

        <CloseWrapper>
          <p></p>
          <p>Question Center</p>
          <CustomClose onClick={() => setDropStatus(false)}/>
        </CloseWrapper>

        <DropdownForm>

          <FormHeader>
            <h2>Chat With Us</h2>
            <p>Provide your information</p>
          </FormHeader>
          
          
          <Formik
            initialValues={{firstName: '', lastName: '', email: '', phoneNum: '', zipCode: '', receiveUpdates: 'Yes'}}
            onSubmit={values => {
              console.log(values)
            }}
            validationSchema={QuestionFormSchema}
            validateOnMount={true}
          >
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
              <FormBody>
                <FormField validInput={values.firstName.length < 1 || values.firstName.length >= 1}> 
                  <label>First name</label>
                  <input type="text"
                    onChange={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                  ></input>
                </FormField>

                <FormField validInput={true}>
                  <label>Last name (Optional)</label>
                  <input type="text"
                    onChange={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                  ></input>
                </FormField>

                <FormField validInput={values.email.length < 1|| Validator.validate(values.email)}>
                  <label>Email address</label>
                  <input type="text"
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    
                  ></input>
                </FormField>

                <FormField validInput={values.phoneNum.length < 1 || (values.phoneNum.length > 9 && validNumber(values.phoneNum))}>
                  <label>Phone</label>
                  <input type="text"
                    onChange={handleChange('phoneNum')}
                    onBlur={handleBlur('phoneNum')}
                    value={values.phoneNum}
                  ></input>
                </FormField>

                <FormField validInput={values.zipCode.length < 1 || (values.zipCode.length === 5 && validZip(values.zipCode))}>
                  <label>Zip code</label>
                  <input type="text"
                    onChange={handleChange('zipCode')}
                    onBlur={handleBlur('zipCode')}
                    value={values.zipCode}
                  ></input>
                </FormField>

                <FormField>
                  <label>Get Tesla updates</label>
                  <select
                    onChange={handleChange('receiveUpdates')}
                    onBlur={handleBlur('receiveUpdates')}
                    value={values.receiveUpdates}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </FormField>

                <FormSubmit valid={isValid && (values.zipCode.length === 5 && validZip(values.zipCode)) && (values.phoneNum.length > 9 && validNumber(values.phoneNum))}>
                  <button type="submit" onClick={handleSubmit}>START CHAT</button>
                </FormSubmit>
              </FormBody>
            )}
          </Formik>

        </DropdownForm>

        
      </QuestionDropdown>

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

const Question = styled.div`
  position: fixed;
  bottom: 11vh;
  right: 1.5vw;
  z-index: 10;
  
  button {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    background: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

const QuestionDropdown = styled.div`
  display: ${props => props.show ? 'block' : 'none' };
  height: 88vh;
  width: 420px;
  background-color: white;
  border-radius: 12px;
  position: fixed;
  bottom: 3vh;
  right: 1.5vw;
  z-index: 10;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  p {
    padding-top: 5px;
    font-weight: 500;
    font-size: 14.5px;
    color: #121314;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
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

const DropdownForm = styled.div`
  text-align: left;
  padding-left: 25px;
  height: 80vh;
  overflow-y: scroll;
  
`

const FormHeader = styled.div`
  padding-top: 20px;
  
  h2 {
    font-weight: 500;
    padding-bottom: 10px;
  }

  p {
    font-weight: 400;
    color: #3f3f3f;
  }
`

const FormBody = styled.div`
  padding: 20px 0;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  
  label {
    font-weight: 500;
    color: #5f5f5f;
    font-size: 16px;
    padding-left: 15px;
    padding-bottom: 10px;
  }

  input {
    width: 90%;
    height: 40px;
    border-radius: 20px;
    border: ${props => props.validInput ? 'none' : '1px solid red'};
    background-color: #f5f5f5;
    padding-left: 15px;
    font-weight: 500;
    color: #121314;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }

  select {
    width: 90%;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: #f5f5f5;
    padding-left: 10px;
    font-weight: 500;
    border-right: 16px solid transparent;

    option {
      width: 20%;
      font-weight: 500;
    }
  }
`

const FormSubmit = styled.div`
  padding-top: 10px;

  button {
    width: 90%;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: ${props => props.valid ? '#326aed' : '#91b2ff'};
    font-weight: 500;
    color: white;
    cursor: pointer;
  }
`