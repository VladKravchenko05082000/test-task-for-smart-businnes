import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
  }
`;
