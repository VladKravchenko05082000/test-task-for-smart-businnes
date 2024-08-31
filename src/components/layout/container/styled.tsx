import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 12px 16px;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};

  ${({ theme }) => theme.mediaQueries.laptop} {
    padding: 24px 16px;
  }
`;
