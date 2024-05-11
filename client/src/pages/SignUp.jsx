import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Select from "react-dropdown-select";
import axios from "axios";
import { login, setProfileImage } from "../redux/authSlice";
import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [userData, setUserData] = useState({
    fullname: "",
    password: "",
    expected_graduation_year: "",
    country: "",
    current_status: "",
    university: "",
    reason_to_use_anatomy_hub: "",
    email:''
  });
  const [error, setError] = useState(null);
  const [profileImager, setProfileImager] = useState(null);

  const handleChange = (value, field) => {
    let newValue = value;
    let newError = null;
  
    // Validation logic for each field
    switch (field) {
      case 'email':
        if (!value.trim()) {
          newError = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newError = "Please enter a valid email address.";
        }
        break;
      case 'password':
        if (!value.trim()) {
          newError = "Password is required.";
        } else if (value.trim().length < 6) {
          newError = "Password must be at least 6 characters long.";
        }
        break;
        case 'university':
      if (!value.trim()) {
        newError = "University is required.";
      } else if (!/^[a-zA-Z\s]*$/.test(value)) {
        newError = "University must contain only letters and spaces.";
      }
      break;
      case 'expected_graduation_year':
        if (isNaN(value)) {
          newError = "Expected graduation year must be a number.";
        }
        break;
      default:
        break;
    }
  
    // Update state based on validation
    setUserData((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  
    setError(newError);
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImager(reader.result);
      dispatch(setProfileImage(reader.result));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = async () => {
    if (!userData.email.trim() || !userData.password.trim()) {
      setError("Please enter both Email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register/",
        userData
      );
      if (response.status === 200) {
     
        localStorage.setItem('userDetails', JSON.stringify({...userData,profileImager}));

        dispatch(
          login({
            fullname: userData.fullname,
            current_status: userData.current_status,
          })
        );
        history("/");
      }
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
    }
  };

  const countries = [
    {
      value: "United Kingdom",
      label: "United Kingdom",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "Nigeria",
      label: "Nigeria",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    // Add 50 most popular countries here
    {
      value: "China",
      label: "China",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "Brazil",
      label: "Brazil",
    },
    {
      value: "Indonesia",
      label: "Indonesia",
    },
    {
      value: "Pakistan",
      label: "Pakistan",
    },
    {
      value: "Bangladesh",
      label: "Bangladesh",
    },
    {
      value: "Russia",
      label: "Russia",
    },
    {
      value: "Mexico",
      label: "Mexico",
    },
    {
      value: "Japan",
      label: "Japan",
    },
    {
      value: "Ethiopia",
      label: "Ethiopia",
    },
    {
      value: "Philippines",
      label: "Philippines",
    },
    {
      value: "Egypt",
      label: "Egypt",
    },
    {
      value: "Vietnam",
      label: "Vietnam",
    },
    {
      value: "DR Congo",
      label: "DR Congo",
    },
    {
      value: "Turkey",
      label: "Turkey",
    },
    {
      value: "Iran",
      label: "Iran",
    },
    {
      value: "Germany",
      label: "Germany",
    },
    {
      value: "Thailand",
      label: "Thailand",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
    },
    {
      value: "France",
      label: "France",
    },
    {
      value: "Italy",
      label: "Italy",
    },
    {
      value: "Tanzania",
      label: "Tanzania",
    },
    {
      value: "South Africa",
      label: "South Africa",
    },
    {
      value: "Myanmar",
      label: "Myanmar",
    },
    {
      value: "Kenya",
      label: "Kenya",
    },
    {
      value: "South Korea",
      label: "South Korea",
    },
    {
      value: "Colombia",
      label: "Colombia",
    },
    {
      value: "Spain",
      label: "Spain",
    },
    {
      value: "Uganda",
      label: "Uganda",
    },
    {
      value: "Argentina",
      label: "Argentina",
    },
    {
      value: "Algeria",
      label: "Algeria",
    },
    {
      value: "Sudan",
      label: "Sudan",
    },
    {
      value: "Ukraine",
      label: "Ukraine",
    },
    {
      value: "Iraq",
      label: "Iraq",
    },
    {
      value: "Afghanistan",
      label: "Afghanistan",
    },
    {
      value: "Poland",
      label: "Poland",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "Morocco",
      label: "Morocco",
    },
    {
      value: "Saudi Arabia",
      label: "Saudi Arabia",
    },
    {
      value: "Uzbekistan",
      label: "Uzbekistan",
    },
    {
      value: "Peru",
      label: "Peru",
    },
    {
      value: "Angola",
      label: "Angola",
    },
    {
      value: "Malaysia",
      label: "Malaysia",
    },
    {
      value: "Mozambique",
      label: "Mozambique",
    },
    {
      value: "Ghana",
      label: "Ghana",
    },
  ];
  

  const status = [
    {
      value: "Year One Anatomy Student",
      label: "Year One Anatomy Student",
    },
    {
      value: "Year Two Anatomy Student",
      label: "Year Two Anatomy Student",
    },
    {
      value: "Year Three Anatomy Student",
      label: "Year Three Anatomy Student",
    },
    {
      value: "Final Year Anatomy Student",
      label: "Final Year Anatomy Student",
    },
    {
      value: "Anatomy Graduate",
      label: "Anatomy Graduate",
    },

  ];

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: 90 }}>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form noValidate>
          <input
            type="text"
            placeholder="Fullname"
            value={userData.fullName}
            onChange={(e) => handleChange(e.target.value, "fullname")}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Work or School Email"
            value={userData.email}
            onChange={(e) => handleChange(e.target.value, "email")}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => handleChange(e.target.value, "password")}
            style={inputStyle}
          />
          <Select
            style={selectStyle}
            placeholder="Select your country"
            options={countries}
            labelField="label"
            valueField="value"
            onChange={(selectedOption) => handleChange(selectedOption, "country")}
          />
          <Select
            style={selectStyle}
            placeholder="Current Status"
            options={status}
            labelField="label"
            valueField="value"
            onChange={(selectedOption) => handleChange(selectedOption, "current_status")}
          />
          <input
            type="text"
            value={userData.university}
            onChange={(e) => handleChange(e.target.value, "university")}
            placeholder="University"
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Expected Graduation Year If A Student"
            value={userData.expected_graduation_year}
            onChange={(e) => handleChange(e.target.value, "expected_graduation_year")}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Reason to Use Anatomy Hub"
            value={userData.reason_to_use_anatomy_hub}
            onChange={(e) => handleChange(e.target.value, "reason_to_use_anatomy_hub")}
            style={inputStyle}
          />
   
          <h6 style={{ marginTop: 20 }}>Upload Profile Picture</h6>
          <input
            style={{ marginBottom: 10 }}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profileImager && (
            <img
              src={profileImager}
              alt="Profile Preview"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const inputStyle = {
  backgroundColor: "transparent",
  borderColor: "white",
  width: "100%",
  maxWidth: "700px",
  padding: "8px",
  height: 55,
  borderRadius: "4px",
  outline: "none",
  marginTop: 20,
  border: "1px solid white",
};

const selectStyle = {
  color:'Grey',
  borderColor: "white",
  width: "100%",
  maxWidth: "700px",
  padding: "8px",
  height: 55,
  marginTop: 20,
  borderRadius: "4px",
  outline: "none",
  border: "1px solid white",
};

export default Signup;
