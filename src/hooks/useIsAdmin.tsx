import { HookCallbacks } from "node:async_hooks";
import { useState, useEffect, FunctionComponent } from "react";

const useIsAdmin: Function = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    localStorage.getItem("key") === "admin"
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, []);

  return isAdmin;
};

export default useIsAdmin;
