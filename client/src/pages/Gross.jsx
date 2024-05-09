import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuth } from "../redux/authSlice";

function Embryology() {
  const { fullname } = useSelector(selectAuth);
  return (<>
   <h1 style={{marginTop:30}}>Gross Anatomy</h1>
    <div style={{ marginTop: 30,backgroundColor:"#24282d",
    height:"80vh" ,borderRadius:10,
    }}>
      <div style={{paddingTop:30,paddingLeft:20}}>
      <h5>In this section, you can; </h5>
            <br/>
            <li>Read the study content and increase your knowledge in Histology</li>
            <li>Take the quiz to test your understanding.</li>
            <br/>
            <p>Goodluck {fullname}!</p>
            <br/>
      </div>
       
      <Link to="/studyg">
      <Button
          style={{ marginTop: 20 ,width:"70vh",marginLeft:20}}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
        >
          Study
        </Button>
      </Link>

      <Link to="/testg">
        <Button
          style={{ marginTop: 20 ,width:"70vh",marginLeft:20}}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
        >
          Quiz
        </Button>
      </Link>
    </div>
  </>
   
  );
}

export default Embryology;
