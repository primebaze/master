import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import { selectAuth } from "../redux/authSlice";
import { Link } from "react-router-dom";
import handImage from "../assets/hand.jpeg";
import skul2Image from "../assets/skul_2.jpg";
import skul2Image2 from "../assets/skul 2.jpg";

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
          height: "80vh",
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
            <img src={skul2Image} alt="" className="box-image" />
            <p className="box-para">
              We're refining the percentile calculations for more accurate
              progress tracking and exam correlation.
            </p>
          </div>
          <div className="box">
            <img src={skul2Image2} alt="" className="box-image" />
            <p className="box-para">
              We're refining the percentile calculations for more accurate
              progress tracking and exam correlation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
