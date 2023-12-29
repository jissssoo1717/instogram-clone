import React from "react";
import { auth } from "./firebase";
import { Navigate } from "react-router-dom";

/* 로그인된 유저만 Protected Route 내의 내용 볼 수 있음 */

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const currentUser = auth.currentUser;

  /* 로그인된 유저 없으면 로그인 페이지로 이동함*/
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  /* 로그인된 유저라면 요청 페이지로 이동함*/
  return children;
};
