import React from "react";
import styled from "styled-components";
import StockImage from '../images/stock-image-1.jpg'

const Container = styled.div`
  display: flex;
  height: 90%;
`;

const Left = styled.div`
  height: 40%;
  width: 60%;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  height: 40%;
  width: 50%;
  background-color: white;
  margin-right:20px;
  display:flex;
  align-items:center;
`;
const Title = styled.div` //change h1 to => div // because of large spacing
  width: 70%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`;
const Description = styled.p`
  font-size: 200 px;
  color: gray;
  width: 70%;
`;

const Image = styled.img`
width: 500px;
margin-right: auto;
border-radius: 10px;
`
const ButtonContainer = styled.div`
display:flex;
`
const Button = styled.button`
font-weight: bold;
color: white;
background-color: darkslateblue;
margin-left:auto;
padding: 15px 30px;
cursor:pointer;
border: 2px darkslateblue;
border-radius: 10px;
background: linear-gradient( to right, white 50%, darkslateblue 50%);
background-size:200% 100%;
background-position: right bottom;
transition: all 0.5s ease-out;
&:hover{
    color:darkslateblue;
    border:2px solid blue;
    background-position: left bottom;
    cursor: pointer;
}
`


const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>Job Hunting?</Title>
        <Description>
          Have you been layed of recently? or Looking for your first Developer Job Looking to for that next opportunity?
        </Description>
        <ButtonContainer>
            <Button>New Jobs</Button>            
        </ButtonContainer>
      </Left>
   
      <Right><Image src={StockImage}/></Right>
    </Container>
  );
};
export default Hero;
