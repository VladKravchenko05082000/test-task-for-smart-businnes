import styled from "styled-components";

import { variantStyles } from "./theme";

import { SkeletonProps, variant as VARIANT } from "./types";

const StyledSkelton = styled.div<SkeletonProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.disabledLight};
  border-radius: ${({ variant }) => (variant === VARIANT.CIRCLE ? "50%" : "6px")};

  min-height: 8px;

  ${variantStyles()}
`;

StyledSkelton.defaultProps = {
  variant: VARIANT.RECT,
};

export default StyledSkelton;
