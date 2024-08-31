import { useFilterUsers } from "hooks";

import { FlexGap } from "components";
import { Filter } from "./components";

const InputsSection: React.FC = () => {
  const { filtersList } = useFilterUsers();

  return (
    <FlexGap gap="16px" justifyContent="space-between" py="16px" flexDirection={{ _: "column", tablet: "row" }}>
      {filtersList.map((item, index) => (
        <Filter {...item} key={index} />
      ))}
    </FlexGap>
  );
};

export default InputsSection;
