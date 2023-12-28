import { Outlet } from "react-router-dom";
import { Main } from "../routes/main";

export const Layout = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};
