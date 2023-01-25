import styled from "styled-components";
import { mobile } from "../responsive";
import {Link, useNavigate} from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const user = useRef();
  const mail = useRef();
  const pass = useRef();
  const rePass = useRef();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [notMatch,setNotMatch] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async(e)=>{
    setLoading(true);
    e.preventDefault();
    if(pass.current.value===rePass.current.value){
      setPassword(pass.current.value);
      setUsername(user.current.value);
      setEmail(mail.current.value);
      const res = await axios.post("https://ecommerce-api-5ei6.onrender.com/api/auth/register/",{email,password,username});
      setLoading(false);
      if(res){
        navigate("/login");
      } 
    }else{
      console.log("in else");
      setNotMatch(true);
      setLoading(false);
    }
  }



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" ref={user}/>
          <Input type="email" placeholder="email" ref={mail}/>
          <Input type="password" placeholder="password" ref={pass}/>
          <Input type="password" placeholder="confirm password" ref={rePass}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>{loading?<CircularProgress style={{color:"white"}}/>:"CREATE"}</Button>
        {notMatch && <span style={{color:"red",fontSize:"17px"}}>Password did not match</span>}
          <Link to="/login">Already have an Account?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;