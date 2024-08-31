import { BoxProps } from "components/layout/types";
import { SkeletonProps } from "components/skeleton/types";

export interface ImageProps extends BoxProps {
  src: string;
  alt: string;
  variant?: SkeletonProps["variant"];
}
