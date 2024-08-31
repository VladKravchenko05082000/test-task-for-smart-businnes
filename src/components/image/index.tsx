import { useState } from "react";

import { Box, Skeleton } from "components";
import { StyledImage } from "./styled";

import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({ src, variant, alt, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Box {...props}>
      {isLoading && <Skeleton variant={variant} />}

      <StyledImage
        style={{ display: !isLoading ? "block" : "none" }}
        src={src}
        variant={variant}
        alt={alt}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </Box>
  );
};

export default Image;
