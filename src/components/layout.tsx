import { Outlet, useNavigate } from "react-router-dom";
import { Main } from "../routes/main";
import { auth } from "../firebase";

export const Layout = () => {
  const navigator = useNavigate();
  const currentUser = auth.currentUser;

  return (
    <>
      {currentUser ? (
        <>
          <Main />
          <Outlet />{" "}
        </>
      ) : (
        navigator("/login")
      )}
    </>
  );
};
