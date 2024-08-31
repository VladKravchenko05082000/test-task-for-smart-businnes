import { FlexGap, Text } from "components";

import { UserInfoItemProps } from "./types";

const UserInfoItem: React.FC<UserInfoItemProps> = ({ value, sectionName }) => {
  return (
    <FlexGap gap="8px">
      <Text textScale="p16Bold">{sectionName}</Text>

      <Text textScale="p16Regular">{value}</Text>
    </FlexGap>
  );
};

export default UserInfoItem;
