import { BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
import { Colors } from "theme/types";

export interface BoxProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    React.HTMLAttributes<HTMLDivElement> {
  cursor?: React.CSSProperties["cursor"];
  $backgroundColor?: keyof Colors;
}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface FlexGapProps extends FlexProps {
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}
