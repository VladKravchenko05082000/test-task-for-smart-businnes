import { SvgProps } from "components/svg/types";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode & SvgProps;
  endIcon?: React.ReactNode & SvgProps;
}
