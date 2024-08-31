// Components
import { Svg } from "components";
// Types
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ color, ...props }) => {
  return (
    <Svg viewBox="0 0 50 50" width="16" {...props} color={color}>
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </Svg>
  );
};

export default Icon;
