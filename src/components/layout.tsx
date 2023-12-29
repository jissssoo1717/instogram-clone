import { Outlet } from "react-router-dom";
import { Main } from "../routes/main";
import { auth } from "../firebase";

export const Layout = () => {
  const currentUser = auth.currentUser;

  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};
