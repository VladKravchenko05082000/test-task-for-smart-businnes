import { ThreeDots } from "react-loader-spinner";

import { useThemeContext } from "context";

const Loader: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color={theme.colors.green}
      radius="9"
      ariaLabel="three-dots-loading"
    />
  );
};

export default Loader;
