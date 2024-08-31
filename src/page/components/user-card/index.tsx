import { Flex, FlexGap, Image } from "components";
import { StyledCardContainer } from "./styled";
import { UserInfoItem } from "./components";

import { UsersDataType } from "store/users/types";

const UserCard: React.FC<UsersDataType> = ({ name, username, phone, email }) => {
  return (
    <StyledCardContainer>
      <Flex
        padding="16px"
        width={{ _: "100%", tablet: "257px" }}
        borderRadius="8px"
        $backgroundColor="gray"
        justifyContent="center"
      >
        <Image src="/images/user-mock-photo.webp" alt="mock-image" width="225px" height="225px" />
      </Flex>

      <FlexGap gap="8px" flexDirection="column">
        <UserInfoItem value={name} sectionName="Name:" />

        <UserInfoItem value={username} sectionName="Username:" />

        <UserInfoItem value={email} sectionName="Email:" />

        <UserInfoItem value={phone} sectionName="Phone:" />
      </FlexGap>
    </StyledCardContainer>
  );
};

export default UserCard;
