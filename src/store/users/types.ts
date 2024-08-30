export type UsersState = {
  usersData: UsersDataType[];
  pending: boolean;
  error?: string;
  count: number;
};

export type UsersDataType = {
  name: string;
  userName: string;
  email: string;
  phone: string;
};
