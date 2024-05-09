import { db } from "../db.js";

export const createCourse = (req, res) => {
  const { title, id, description } = req.body;

  const insertQuery = `
    INSERT INTO courses(title, id, description) 
    VALUES (?, ?, ?)
  `;
  const values = [title, id, description];

  db.query(insertQuery, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Course has been created.");
  });
};

export const getCourseById = (req, res) => {
  const courseId = req.params.id;
  const query = "SELECT * FROM courses WHERE id = ?";

  db.query(query, [courseId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Course not found");
    return res.status(200).json(data[0]);
  });
};

export const updateCourse = (req, res) => {
  const courseId = req.params.id;
  const { title, description } = req.body;

  const updateQuery = `
    UPDATE courses
    SET title = ?, description = ?
    WHERE id = ?
  `;
  const values = [title, description, courseId];

  db.query(updateQuery, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Course has been updated.");
  });
};

export const deleteCourse = (req, res) => {
  const courseId = req.params.id;
  const deleteQuery = "DELETE FROM courses WHERE id = ?";

  db.query(deleteQuery, [courseId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Course has been deleted.");
  });
};
