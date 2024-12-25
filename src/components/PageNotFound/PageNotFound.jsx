import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Animation keyframes for the rocket moving in a circular path
const moveAround = keyframes`
  0% { transform: rotate(0deg) translateX(400px) rotate(0deg); }
  25% { transform: rotate(90deg) translateX(400px) rotate(90deg); }
  50% { transform: rotate(180deg) translateX(400px) rotate(180deg); }
  75% { transform: rotate(270deg) translateX(400px) rotate(270deg); }
  100% { transform: rotate(360deg) translateX(400px) rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

// Styled components
const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1487925876428-ebd8a23ee1d4?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff;
  font-family: "Arial", sans-serif;
  overflow: hidden;
  position: relative;
`;

const NotFoundContent = styled.div`
  max-width: 500px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

const ErrorCode = styled.h1`
  font-size: 7rem;
  font-weight: 700;
  margin: 0;
  color: #ffdf6b;
  animation: ${float} 3s ease-in-out infinite;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  color: #f1f1f1;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  font-size: 1.2rem;
  color: #333;
  background-color: #ffdf6b;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 15px rgba(255, 223, 107, 0.5);

  &:hover {
    background-color: #ffb84d;
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(255, 184, 77, 0.8);
  }
`;

// Rocket Component
const Rocket = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  transform-origin: center center;
  animation: ${moveAround} 4s linear infinite;
  pointer-events: none;
  z-index: 1;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Oops! You’re floating in unknown territory.</ErrorMessage>
        <HomeButton to="/">Return to Earth!</HomeButton>
      </NotFoundContent>
      <Rocket src="https://www.freeiconspng.com/uploads/rocket-ship-png-13.png" />
    </NotFoundWrapper>
  );
};

export default NotFound;
