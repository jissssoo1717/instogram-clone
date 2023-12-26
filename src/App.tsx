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

// Router를 통한 경로 지정
const router = createBrowserRouter([
  {
    // 인증된 사용자만 Layout 내용 확인 가능
    path: "/",
    element: <Layout />,
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
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
