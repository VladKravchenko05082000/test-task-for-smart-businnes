import React from "react";
import { StyledInput, StyledInputWrapper } from "./styled";

import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ startIcon, endIcon, ...props }) => {
  return (
    <StyledInputWrapper>
      {React.isValidElement(startIcon) && startIcon}
      {/* <CloseIcon position="absolute" top="7px" zIndex="2" right="6px" cursor="pointer" /> */}

      <StyledInput {...props} />

      {React.isValidElement(endIcon) && endIcon}
    </StyledInputWrapper>
  );
};

export default Input;
