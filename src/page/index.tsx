import { useEffect } from "react";

import { useAppDispatch } from "store/store";
import { increment } from "store/users";
import { fetchAllUsers } from "store/users/action";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(increment());
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return <div onClick={onClick}>MainPage</div>;
};

export default MainPage;
