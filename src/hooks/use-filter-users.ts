import { FilterProps } from "page/components/inputs-section/components/filter/types";
import { useAppDispatch } from "store/store";
import { setFilterUsers } from "store/users";
import { UsersDataType } from "store/users/types";

export const useFilterUsers = () => {
  const dispatch = useAppDispatch();

  const onChangeFilterHandler = (e: React.ChangeEvent<HTMLInputElement>, key: keyof UsersDataType) => {
    const {
      target: { value },
    } = e;

    dispatch(setFilterUsers({ searchQuery: value, key }));
  };

  const resetInputValue = (key: keyof UsersDataType) => {
    const inputField = document.getElementById(key) as HTMLInputElement;

    inputField.value = "";
    dispatch(setFilterUsers({ searchQuery: "", key }));
  };

  const filtersList: FilterProps[] = [
    {
      placeholder: "Please enter name...",
      handler: onChangeFilterHandler,
      resetInputValue,
      filterKey: "name",
    },
    {
      placeholder: "Please enter username...",
      handler: onChangeFilterHandler,
      resetInputValue,
      filterKey: "username",
    },
    {
      placeholder: "Please enter email...",
      type: "email",
      handler: onChangeFilterHandler,
      resetInputValue,
      filterKey: "email",
    },
    {
      placeholder: "Please enter phone...",
      type: "tel",
      handler: onChangeFilterHandler,
      resetInputValue,
      filterKey: "phone",
    },
  ];

  return { filtersList };
};
