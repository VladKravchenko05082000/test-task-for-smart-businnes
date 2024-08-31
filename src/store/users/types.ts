export type UsersState = {
  usersData: UsersDataType[];
  filters: FilterType;
  pending: boolean;
  error?: string;
  count: number;
};

export type FilterUserPayload = {
  key: keyof UsersDataType;
  searchQuery: string;
};

export type FilterType = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UsersDataType = {
  name: string;
  username: string;
  email: string;
  phone: string;
};
