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

  const handleChange = (selectedOption, field) => {
    const selectedValue = Array.isArray(selectedOption) ? selectedOption[0].value : selectedOption;
    setUserData((prev) => ({
      ...prev,
      [field]: selectedValue,
    }));
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
    {
      value: "Doctor",
      label: "Doctor",
    },
    {
      value: "MBBS Student",
      label: "MBBS Student",
    },
    {
      value: "Fellow",
      label: "Fellow",
    },
    {
      value: "Medical Student",
      label: "Medical Student",
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
