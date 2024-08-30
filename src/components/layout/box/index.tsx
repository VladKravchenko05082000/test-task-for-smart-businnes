import styled from "styled-components";

import { border, layout, position, space } from "styled-system";

import { BoxProps } from "../types";

export const Box = styled.div<BoxProps>`
  cursor: ${({ cursor }) => cursor && cursor};
  background-color: ${({ theme, $backgroundColor }) => $backgroundColor && theme.colors[$backgroundColor]};
  
  ${border}
  ${layout}
  ${position}
  ${space}
`;
