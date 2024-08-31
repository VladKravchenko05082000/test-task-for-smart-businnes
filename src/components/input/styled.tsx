import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 16px;
  padding: 0px 24px;
  height: 30px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.fonts.spaceMono};
  position: relative;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;
