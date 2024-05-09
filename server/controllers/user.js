import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

    const {fullname, country, currentStatus, university, expectedGraduationYear, reasonToUseAnatomyHub, email} = req.body;

// This is check if an email of a user exist
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = `
      INSERT INTO users(fullname, password, country, current_status, university, expected_graduation_year, reason_to_use_anatomy_hub, email) 
      VALUES (?, ?, ?, ?, ?, ?, ?,?)
    `;
    const values = [fullname, hash, country, currentStatus, university, expectedGraduationYear, reasonToUseAnatomyHub, email];

    db.query(insertQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(err)
      return res.status(200).json("User has been created.");
    });
  });
};


export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong email or password!");

    return res.status(200).json("User logged in successfully.");
  });
};

export const logout = (req, res) => {
  return res.status(200).json("User has been logged out.");
};
