import LogIn from "../components/pages/logIn/LogIn";
import Policy from "../components/pages/policy/Policy";
import TermsOfUse from "../components/pages/termsOfUse/TermsOfUse";
import NotFound from "../components/pages/notFound/NotFound";

const publicRoutes = [
  { path: "/", component: <LogIn /> },
  { path: "/terms", component: <TermsOfUse /> },
  { path: "/policy", component: <Policy /> },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default publicRoutes;
