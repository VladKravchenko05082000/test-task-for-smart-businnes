import { Input } from "components";

import { useMatchBreakpoints } from "hooks";

import { FilterProps } from "./types";
import { CloseIcon, SearchIcon } from "components/svg";

const Filter: React.FC<FilterProps> = ({ placeholder, type = "text", handler, resetInputValue, filterKey }) => {
  const { isDesktop } = useMatchBreakpoints();

  return (
    <Input
      placeholder={placeholder}
      type={type}
      startIcon={
        <CloseIcon
          position="absolute"
          top="7px"
          zIndex="2"
          right="6px"
          cursor="pointer"
          onClick={() => resetInputValue(filterKey)}
        />
      }
      endIcon={<SearchIcon position="absolute" top="7px" zIndex="2" left="6px" />}
      onChange={e => handler(e, filterKey)}
      width={isDesktop ? "calc(25% - 8px)" : "100%"}
      id={filterKey}
    />
  );
};

export default Filter;
