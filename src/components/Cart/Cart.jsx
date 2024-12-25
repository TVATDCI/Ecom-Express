import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'


const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top:80px;
  background-color: #f9f9f9;
  min-height: 100vh;

   @media (max-width: 768px) {
    padding: 15px;
    margin-top: 50px;
  }

  @media (max-width: 375px) {
    padding: 10px;
    margin-top: 40px;
  }
`;


const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
 border: 1px solid #FFD700;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: #fff;
 transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;

   @media (max-width: 768px) {
    width: 80px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
   text-align:left;
`

const ProductTitle = styled.h2`
  font-size: 1.2em;
  color: #C19A6B; /* Warm color for product titles */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 375px) {
    font-size: 1em;
  }
`;

const ProductDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.85em;
  }

  @media (max-width: 375px) {
    font-size: 0.8em;
  }
`;


const ProductReview = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;
`

const ProductPrice = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
`

const RemoveButton = styled.button`
background-color: #A52A2A;
  color: white;
  width: 100px;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1a1a;
  }

  @media (max-width: 768px) {
    width: 80px;
    padding: 6px 12px;
    font-size: 0.85em;
  }

  @media (max-width: 375px) {
    width: 70px;
  }
`;

const ProductQuantity = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
  
`
const ProductTotal = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
`
const TotalPrice = styled.p`
  font-size: 1.5em;
  color: #333;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 375px) {
    font-size: 1.1em;
  }
`;


const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const QuantityInput = styled.input`
  width: 70px;
  padding: 4px;
  margin-top: 5px;
  border: 1px solid #FFD700; /* Gold border */
  border-radius: 4px;
  text-align: center;
  font-size: 0.9em;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #C19A6B;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 375px) {
    width: 50px;
  }
`;

const StyledButton = styled.button`
  background-color: #8B4513; /* Rich brown for theme-aligned button */
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A0522D; /* Lighter brown on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 10px;
  }
`;


function Cart() {
  const { state: cart, dispatch } = useContext(ProductContext)
 const navigate = useNavigate();


  if (!cart || cart.length === 0) {
    return <div style={{marginTop:'200px',textAlign:'center'}}>No products in the cart</div>
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += (cart[i].price * cart[i].quantity);
  }
  console.log(total)

function handleQuantityChange(e, product) {
  if (e.target.value < 1) {
    return;
  }
  dispatch({ type: 'CHANGE_QUANTITY', payload: { id: product.id, quantity: e.target.value } });
}

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartItems>
        {cart.map((product) => (
          <CartItem key={product.id}>
            <ProductImage src={product.thumbnail} alt={product.title} />
            <ProductDetails>
              <ProductTitle>Name: {product.title}</ProductTitle>
              <ProductDescription>Description: {product.description}</ProductDescription>
            
              <ProductPrice>Price: ${product.price}</ProductPrice>
              <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
              <QuantityInput type="number"  name='quantity' value={product.quantity} onChange={(e)=>handleQuantityChange(e,product)} />
              <ProductTotal>Total Price: ${product.quantity * product.price}</ProductTotal>
             
              <RemoveButton onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: product.id })}>
                Remove
              </RemoveButton>
            </ProductDetails>
          </CartItem>
          
        ))}

      </CartItems>
      <TotalPrice>Total: ${total}</TotalPrice>
      <ButtonDiv>
     <StyledButton onClick={()=> navigate('/login')}>Checkout</StyledButton>
     <StyledButton   onClick={()=> navigate('/products')}>Continue Shopping</StyledButton>
     </ButtonDiv>
    </CartContainer>
  )
}

export default Cart