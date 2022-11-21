import React from "react";
import styled from "styled-components";

const CustomCheckbox = ({
  color,
  title,
  value,
  checked,
  handleSelectChange,
}) => {
  return (
    <Container>
      <RadioButton
        type="radio"
        name="radio"
        value={value}
        checked={value === checked}
        onChange={(event) => handleSelectChange(event.target.value)}
      />
      <RadioButtonLabel color={color} />
    </Container>
  );
};

export default CustomCheckbox;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 1px solid #ccc;
  padding: 1px;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  transition: all 0.3s ease;
  &:hover ~ ${RadioButtonLabel} {
    opacity: 0.8;
  }
  &:checked ~ ${RadioButtonLabel} {
    border: 1px solid #222;
    box-shadow: inset 0 0 0 0.1rem #fff;
  }
`;
