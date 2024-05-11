import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import { selectAuth } from "../redux/authSlice";
import { Link } from "react-router-dom";
import handImage from "../assets/hand.jpeg";
import skul2Image from "../assets/skul_2.jpg";
import skul2Image2 from "../assets/skul 2.jpg";
import hub from "../assets/hub.jpeg";

function Home() {
  const { isAuthenticated, fullname } = useSelector(selectAuth);

  return (
    <div>
      <h1 style={{ marginTop: 30 }} className="dashboard">
        Dashboard
      </h1>
      <div
        style={{
          marginTop: 30,
          backgroundColor: "#24282d",
          height: "90vh",
          width:"100%",
          borderRadius: 10,
          padding: 20,
        }}
      >
        {isAuthenticated && <h4 className="name">Hello {fullname}!</h4>}
        <h3 className="progress">Study Progress Bar: {10}%</h3>
        <LinearProgress variant="buffer" value={10} sx={{ height: 30 }} />
        <div className="box-wrapper">
          <div className="box">
            <img src={handImage} alt="" className="box-image" />
            <p className="box-para">
              We're refining the percentile calculations for more accurate
              progress tracking and exam correlation.
            </p>
          </div>
          <div className="box">
            <img src={hub} alt="" className="box-image" />
            <p className="box-para">
              View all course materials related to Anatomy
              <br/> <br/>90% of our users pass their Anatomy exams in flying colors  
              <br/>
              <Link to ="/quiz">
          <button  className="passButton">
             Courses
          </button>
          <br/>
        </Link>
            </p>
          
          </div>
          <div className="box">
            <img src={skul2Image2} alt="" className="box-image" />
            <p className="box-para">
            <h4>Reach your study goal!</h4><br/>
Begin your journey with AnatomyHub by starting a Quiz session.
<br/><br/>
<Link to ="/quiz">
          <button  className="lButton">
            Quiz
          </button>
        </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
