import { PositionProps, SpaceProps } from "styled-system";
import { Colors } from "theme/types";

export interface SvgProps extends React.SVGAttributes<SVGElement>, SpaceProps, PositionProps {
  color?: keyof Colors;
}
