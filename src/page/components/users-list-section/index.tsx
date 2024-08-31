import { Flex, FlexGap, Loader } from "components";
import UserCard from "../user-card";

import { useAppSelector } from "store/store";
import { selectFilteredUsers } from "store/users/selectors";

const UsersListSection: React.FC = () => {
  const filteredUsers = useAppSelector(selectFilteredUsers);
  const { pending } = useAppSelector(state => state.users);

  return (
    <FlexGap gap="16px" flexDirection="column">
      {pending ? (
        <Flex justifyContent="center">
          <Loader />
        </Flex>
      ) : (
        filteredUsers.map((item, index) => <UserCard key={index} {...item} />)
      )}
    </FlexGap>
  );
};

export default UsersListSection;
