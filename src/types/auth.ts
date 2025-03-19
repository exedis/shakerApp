export interface Token {
  token: string;
}

export interface VerifyParams {
  code: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    languageCode: string;
    photoUrl: string;
  };
}
