


import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 600px;
  padding: 30px;
  margin: 100px auto;
  margin-top: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
background: linear-gradient(135deg, #000, #333);
  text-align: center;
  @media (max-width: 760px) {
    max-width: 85%;
    padding: 25px;
    margin: 90px auto;
    margin-top: 200px;
  }
  @media (max-width: 375px) {
    max-width: 95%;
    padding: 15px;
    margin: 90px auto;
    margin-top: 400px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  &:hover {
    background-color: #EDC561;
    color: rgb(237, 197, 97);
    font-weight: bold;
  }
  @media (max-width: 760px) {
    font-size: 15px;
    padding: 9px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    padding: 7px;
    margin: 8px 0;
  }
`;
const P = styled.p`
  color:red ;
  `;
  const H2 = styled.h2`
  color:#edc561 ;
  `;
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color:rgb(237, 197, 97);
 color: white;
 font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 10px;
  &:focus{
    background-color: white;
    color: rgb(237, 197, 97);
    font-weight: bold;
  }
  @media (max-width: 760px) {
    font-size: 15px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    padding: 7px;
    margin-top: 8px;
  }
`;
const ForgotEmail = () => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Check your phone for a recovery email.");
    setTimeout(() => {
        navigate("/login");
    }, 5000);
    return () => {
      clearTimeout();
    };
  
    
  };
  return (
    <Wrapper>
      <H2>Forgot Email</H2>
      <P>Enter your phone number to recover your email address.</P>
      <form onSubmit={handleSubmit}>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Button type="submit">Recover Email</Button>
      </form>
      {message && <p>{message}</p>}
    </Wrapper>
  );
};
export default ForgotEmail;