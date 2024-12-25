import styled from 'styled-components';
const StyledButton = styled.button`
    background-color: red;
    display: inline-block;
    border: none;
    border-radius: 19px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding:.75rem 1.5rem;
    margin: 1rem;
    width: 100%;
    max-width: 200px;
    text-decoration: none;
    transition: background-color 0.3s;
    &:hover {
        background-color: white;
        color: red;
    }
`;
const Button = ({ onClick, children, disabled }) => {
    return (
        <>
            <StyledButton
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </StyledButton>
        </>
    );
};
export default Button;