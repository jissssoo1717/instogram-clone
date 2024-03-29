import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Layout } from "./components/layout";
import { Home } from "./routes/taps/home";
import { Login } from "./routes/login";
import { Signup } from "./routes/signup";
import reset from "styled-reset";
import { Profile } from "./routes/taps/profile";
import { Explore } from "./routes/taps/explore";
import { Reels } from "./routes/taps/reels";
import { DM } from "./routes/taps/direct-message";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { ResetPassword } from "./routes/reset-password";
// import { ProtectedRoute } from "./protected-route";

// Router를 통한 경로 지정
const router = createBrowserRouter([
  {
    // 인증된 사용자만 Layout 내용 확인 가능
    path: "/",
    element: (
      //<ProtectedRoute>
      <Layout />
      //</ProtectedRoute>
    ),
    children: [
      {
        // Home 탭
        path: "",
        element: <Home />,
      },
      {
        // 탐색 탭
        path: "explore",
        element: <Explore />,
      },
      {
        // 릴스
        path: "reels",
        element: <Reels />,
      },
      {
        // 메시지
        path: "direct/inbox",
        element: <DM />,
      },
      {
        // 프로필
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/password/reset",
    element: <ResetPassword />,
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    /* Firebase의 초기 인증 상태 확인 */
    if (!isLoading) return;
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
