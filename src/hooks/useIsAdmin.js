import { useState, useEffect } from "react";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.getItem("key") === "admin"
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, []);

  console.log(isAdmin)
  return isAdmin;
};

export default useIsAdmin;
