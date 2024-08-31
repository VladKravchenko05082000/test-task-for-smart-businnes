import { UsersDataType } from "store/users/types";

export type FilterProps = {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  filterKey: keyof UsersDataType;
  handler: (e: React.ChangeEvent<HTMLInputElement>, key: keyof UsersDataType) => void;
  resetInputValue: (key: keyof UsersDataType) => void;
};
