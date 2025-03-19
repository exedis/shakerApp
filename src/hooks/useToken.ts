import { TOKEN_TITLE } from "@src/types/common";

export const UseIsTokenExist = () => {
  const token = localStorage.getItem(TOKEN_TITLE);
  return Boolean(token);
};
