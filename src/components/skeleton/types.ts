export const variant = {
  RECT: "rect",
  CIRCLE: "circle",
} as const;

export type Variant = (typeof variant)[keyof typeof variant];

export interface SkeletonProps{
  variant?: Variant;
}
