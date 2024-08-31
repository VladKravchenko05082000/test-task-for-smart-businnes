import styled from "styled-components";

import { SkeletonProps } from "components/skeleton/types";

export const StyledImage = styled.img<{ variant?: SkeletonProps["variant"] }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ variant }) => (variant === "circle" ? "50%" : "0px")};
`;
