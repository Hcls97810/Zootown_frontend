import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function PublishedCourseListItem(props) {
  return (
    <div className="adminclassroom-publishedcourse-item pl-1 pr-1">
      <div className="adminclassroom-publishedcourse-item-section1">
        <img
          src={props.publishedCourseListItem.img}
          className="adminclassroom-publishedcourse-item-section1-img"
        />
        <div className="adminclassroom-publishedcourse-item-section1-text">
          {props.publishedCourseListItem.name}
        </div>
      </div>
      <div className="adminclassroom-publishedcourse-item-section2">
        {props.publishedCourseListItem.start_date}
      </div>
      <div className="adminclassroom-publishedcourse-item-section3">
        <Link to="/admin-classroom-editcoursepage">
          <div className="adminclassroom-publishedcourse-item-section3-btnedit">
            Edit Course
          </div>
        </Link>

        <div className="adminclassroom-publishedcourse-item-section3-btndisable">
          Disable Course
        </div>
      </div>
    </div>
  );
}

export default PublishedCourseListItem;
