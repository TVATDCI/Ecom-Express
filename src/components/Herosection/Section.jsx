import React from "react";
import styled from "styled-components";
const StyledSection = styled.section`
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    min-width: 320px;
    min-height: 100vh;
    `;
const Section = ({
    className,
    style,
    id,
    children,
}) => {
    return (
        <StyledSection
            className={className}
            style={style}
            id={id}
        >
            {children}
        </StyledSection>
    );
};
export default Section;