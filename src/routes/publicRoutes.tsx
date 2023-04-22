import LogIn from "../components/pages/logIn/LogIn";
import NotFound from "../components/pages/notFound/NotFound";

const publicRoutes = [
  { path: "/", component: <LogIn /> },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default publicRoutes;
