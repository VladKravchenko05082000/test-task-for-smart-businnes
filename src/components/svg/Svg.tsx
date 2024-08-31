import styled from "styled-components";

import { position, space } from "styled-system";

import { SvgProps } from "./types";

const Svg = styled.svg<SvgProps>`
  align-self: center;
  fill: ${({ theme, color }) => color && theme.colors[color]};
  flex-shrink: 0;

  ${space}
  ${position}
`;

export default Svg;
