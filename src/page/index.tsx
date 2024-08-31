import { useEffect } from "react";

import { Container, Text } from "components";

import { useAppDispatch } from "store/store";
import { fetchAllUsers } from "store/users/action";
import { InputsSection, UsersListSection } from "./components";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <Container>
      <Text textTransform="uppercase" textScale="h1" textAlign="center">
        Users Dashboard
      </Text>

      <InputsSection />

      <UsersListSection />
    </Container>
  );
};

export default MainPage;
