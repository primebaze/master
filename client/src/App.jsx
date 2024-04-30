import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"; 
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Modules from "./pages/Modules";
import StudyPlan from "./pages/StudyPlan";
import Menu from './components/Menu';
import Forum from './pages/Forum';
import SignUp from './pages/SignUp'; 
import { selectAuth } from './redux/authSlice'; 
import { useState } from 'react';
import Quizes from "./pages/Quizes"; // Import Quizes component

function App() {
  const [threads, setThreads] = useState([ 
    {
      id: 1,
      title: 'Introduction to Human Anatomy',
      posts: [
        { id: 1, author: 'Alice', content: 'Welcome to the anatomy forum!' },
        { id: 2, author: 'Bob', content: 'Glad to be here!' }
      ]
    },
  ]);

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/studyplan" element={<StudyPlan />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/quiz" element={<Quizes />} /> 
              <Route path="/forum" element={<Forum threads={threads} />} /> 
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
      element: <Layout />,
      
    },
    {
      path: "/signin",
      element: auth.isAuthenticated ? <Home /> : <Signin />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
