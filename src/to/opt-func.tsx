import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Logout = () => {
  const nav = useNavigate();

  auth.signOut();
  nav("/login");
};
