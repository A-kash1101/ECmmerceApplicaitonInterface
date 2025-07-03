import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => (
  <Link to={`/courses/${course.id}`} className="course-card">
    <img src={course.image} alt={course.title} className="course-card-img" />
    <div className="course-card-body">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${course.progress * 100}%` }} />
      </div>
      <span className="progress-label">{Math.round(course.progress * 100)}% complete</span>
    </div>
  </Link>
);

export default CourseCard; 