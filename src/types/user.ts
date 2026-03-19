export type TUser = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
}

export type TUserRegistration = Pick<TUser, 'name' | 'email'> & {
  password: string;
  avatar?: File;
}

export type TUserAuth = Omit<TUserRegistration, 'name'>
