import styled, { css } from "styled-components";

import { theme } from "theme";
import { styles } from "./theme";

import { layout, space, typography } from "styled-system";

import { TextProps, ThemedProps } from "./types";

export const getEllipsis = ({ ellipsis }: ThemedProps) => {
  if (ellipsis) {
    return css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }
};

export const Text = styled.p<TextProps>`
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.white)};
  text-transform: ${({ textTransform }) => textTransform && textTransform};

  ${({ textScale }) => textScale && styles[textScale]};

  font-weight: ${({ $fontWeight }) => $fontWeight && $fontWeight};

  ${getEllipsis}

  ${space};
  ${typography};
  ${layout};
`;
