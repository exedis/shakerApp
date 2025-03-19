import { Path } from "@consts/path";
import { TOKEN_TITLE } from "@src/types/common";

export const UseAuthorized = () => {
  const token = localStorage.getItem(TOKEN_TITLE);
  if (token === null || token === "undefined") {
    // window.location.replace(Path.TO_HOME);
    window.location.href = Path.TO_HOME;
  }
  return true;
};
