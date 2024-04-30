
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; 
import { LinearProgress } from "@mui/material";
import { selectAuth } from "../redux/authSlice"; 

function Home() {
  const [progress, setProgress] = useState(10);
  const { isAuthenticated, username } = useSelector(selectAuth); 

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1 className="dashboard">Dashboard</h1>
      {isAuthenticated && <h4 className="name">Hello {username}!</h4>}
      <h3 className="progress">Study Progress Bar: {progress}%</h3> 
      <LinearProgress variant="buffer" value={progress} sx={{ height: 30 }} />
      <div className="box-wrapper">
        <div className="box"><h2>Success Rate</h2></div>
        <div className="box"><h2>Search Materials</h2></div>
      </div>
      <div className="box-wrapper">
        <div className="box"><h2>View Results</h2></div>
        <div className="box"><h2>Join Global Competition</h2></div>
      </div>
      <div className="box-wrapper">
        <div className="box"><h2>Join Forum</h2></div>
      </div>
    </div>
  );
}

export default Home;
