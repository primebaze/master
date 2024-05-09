import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Quizes() {
  return (
    <>
      <h1 style={{ marginTop: 30 }}>Quiz</h1>
      <div
        style={{
          marginTop: 30,
          backgroundColor: "#24282d",
          height: "100vh",
          width: "150%", 
          borderRadius: 10,
        }}
      >
        <div style={{ paddingTop: 30, paddingLeft: 20 }}>
          <h3>Reach your study goal </h3>
          <br />
          <p>
             
            Elevate Your Anatomy Expertise with
            Targeted Quizzes Tailored for anatomy students, graduates,
            clinicians, fellows, and medical doctors. 
            Our quiz section offers a
            focused approach to enhancing anatomical knowledge. Organized into
            three specialized sections: 
            <br/> <br/>
            1. Histology: Investigate the
            microscopic structures of tissues and organs, crucial for
            understanding cellular function and pathology. 
            <br/> <br/>
            2. Embryology:
            Explore the intricate stages of human development, from conception
            to birth, vital for grasping developmental anomalies and clinical
            implications. 
            <br/> <br/>
            3. Gross Anatomy: Dive into the macroscopic
            structures of the human body, essential for surgical planning,
            diagnostic interpretation, and clinical practice. 
            <br/> <br/>
            Challenge yourself
            across these targeted domains, deepen your anatomical understanding,
            and refine your clinical acumen. Start exploring now and unlock new
            levels of anatomical proficiency with our Anatomy Quiz Section.
          </p>
          <br/> <br/>
          <h3>Choose Your Topic Below</h3>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <Link to="/test">
            <Button
              style={{ marginTop: 20, width: 120, marginLeft: 20 }}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
            >
              Histology
            </Button>
          </Link>

          <Link to="/teste">
            <Button
              style={{ marginTop: 20, width: 120, marginLeft: 20 }}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
            >
              Embryology
            </Button>
          </Link>
          <Link to="/testg">
            <Button
              style={{ marginTop: 20, width: 200, marginLeft: 20 }}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
            >
              Gross Anatomy
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quizes;
