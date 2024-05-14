import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Menu from "./components/Menu";
import Forum from "./pages/Forum";
import SignUp from "./pages/SignUp";
import { selectAuth } from "./redux/authSlice";
import Quizes from "./pages/Quizes";
import Courses from "./pages/Courses";
import Three from "./pages/Three";
import Histology from "./pages/Histology";
import Embryology from "./pages/Embryology";
import Gross from "./pages/Gross";
import Study from "./pages/Study";
import Test from "./pages/Test";
import StudyG from "./pages/StudyG";
import StudyE from "./pages/StudyE";
import TestE from "./pages/TestE";
import TestG from "./pages/TestG";
import Search from "./pages/Search";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Routes>
              <Route path="/quiz" element={<Quizes />} />
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/histology" element={<Histology />} />
              <Route path="/three" element={<Three />} />
              <Route path="/embryology" element={<Embryology />} />
              <Route path="/gross" element={<Gross />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/study/" element={<Study />} />
              <Route path="/test" element={<Test />} />
              <Route path="/studye" element={<StudyE />} />
              <Route path="/teste" element={<TestE />} />
              <Route path="/studyg" element={<StudyG />} />
              <Route path="/testg" element={<TestG />} />
              <Route path="/search" element={<Search />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };

  const auth = useSelector(selectAuth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: auth.isAuthenticated ? <Layout /> : <Signin />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/study/",
          element: <Study />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/studye",
          element: <StudyE />,
        },
        {
          path: "/teste",
          element: <TestE/>,
        },
        {
          path: "/studyg",
          element: <StudyG />,
        },
        {
          path: "/testg",
          element: <TestG />,
        },
        {
          path: "/quiz",
          element: <Quizes />,
        },
        {
          path: "/forum",
          element: <Forum />,
        },

        {
          path: "/histology",
          element: <Histology />,
        },
        {
          path: "/embryology",
          element: <Embryology />,
        },
        {
          path: "/gross",
          element: <Gross />,
        },
        {
          path: "/three",
          element: <Three />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },

    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
