import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard';




const ToggleGroup = styled.div`
  display: flex;
  
 background-color: #D4AF37;  /* Gold background */
  color: #333;
  font-size: 16px;
 height: 100px;
  font-weight: 500;
 
  margin-top: 80px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
 padding: 10px 20px;
  cursor: pointer;
  border-radius: 0;
  font-weight: 600;
  color: #333; /* Dark color for text */
  background-color: ${({ active }) => (active ? '#8B4513' : 'transparent')}; /* Dark brown for active button */
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #A0522D; /* Lighter brown on hover */
    color: #f5f5f5; /* Light text color on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 6px 12px;
  }
`;

 

 
const Divider = styled.div`
 width: 1.5px;
  background-color: #fff; /* White divider for contrast */
`;



function Products() {
  const [toggle, setToggle] = useState('all');
 
 
  return (
    <div>
   
    <div>
    <ToggleGroup>
    {toggle === "all" ? (
      <ToggleButton active value="all" onClick={() => setToggle("all")}>
        All
      </ToggleButton>
    ) : (
      <ToggleButton value="all" onClick={() => setToggle("all")}>
        All
      </ToggleButton>
    )}

    <Divider />
    {toggle === "furniture" ? (
      <ToggleButton
        active
        value="furnituret"
        onClick={() => setToggle("furniture")}
      >
        FURNITURE
      </ToggleButton>
    ) : (
      <ToggleButton
        value="furniture"
        onClick={() => setToggle("furniture")}
      >
        FURNITURE
      </ToggleButton>
    )}

    <Divider />
    {toggle === "fragrances" ? (
      <ToggleButton
        active
        value="fragrances"
        onClick={() => setToggle("fragrances")}
      >
      FRAGRANCE
      </ToggleButton>
    ) : (
      <ToggleButton value="fragrances" onClick={() => setToggle("fragrances")}>
      FRAGRANCE
      </ToggleButton>
    )}
    <Divider />
    {toggle === "groceries" ? (
      <ToggleButton
        active
        value="groceries"
        onClick={() => setToggle("groceries")}
      >
     GROCERIES
      </ToggleButton>
    ) : (
      <ToggleButton value="groceries" onClick={() => setToggle("groceries")}>
     GROCERIES
      </ToggleButton>
    )}
    <Divider />
    {toggle === "home-decoration" ? (
      <ToggleButton
        active
        value="home-decoration"
        onClick={() => setToggle("home-decoration")}
      >
      HOME DECORATION
      </ToggleButton>
    ) : (
      <ToggleButton value="home-decoration " onClick={() => setToggle("home-decoration")}>
      HOME DECORATION
      </ToggleButton>
    )}
  </ToggleGroup>
  
  </div>
  <ProductCard toggle={toggle} />
    </div>
  )
}

export default Products