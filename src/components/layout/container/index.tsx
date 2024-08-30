import { StyledContainer } from "./styled";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
