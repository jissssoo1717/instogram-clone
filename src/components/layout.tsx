import { Outlet } from "react-router-dom";
import { Main } from "../routes/main-tap";

export const Layout = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};
