import React from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
display:flex;
justify-content: space-around;
flex: 1;
align-items: center;
`;
const Center = styled.div`
display:flex;
/* justify-content: space-around; */
flex: 2;
/* align-items: center; */
 `;

const Right = styled.div`
display:flex;
justify-content: space-around;
flex: 1;
align-items: center;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

const Menu = styled.ul`
display:flex;
list-style: none;
`;
const MenuItem =styled.li`
font-size: 20px;
font-weight:bold;
margin-right: 30px;
color: grey;
cursor: pointer;
&:hover{
    color:darkslateblue
  }
`;

const Button = styled.button`
font-weight: bold;
background-color: darkslateblue;
border: 2px solid white;
cursor:pointer;
color: whitesmoke;
padding: 20px 20px;
border-radius: 10px;
&:hover{
    background-color: white;
    color:black;
    border: 2px solid darkslateblue
}
`;

const Navbar = () => {
    return (
    <Container>
    <Left><Logo> Dev.Hunt </Logo></Left>
    <Center><Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Applications</MenuItem>
        <MenuItem>Acount Information</MenuItem>
        <MenuItem></MenuItem>
    </Menu></Center>
    <Right><Button>Logout</Button></Right>
    
    </Container>
    )
};

export default Navbar
