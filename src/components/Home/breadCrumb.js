import React, { useState } from 'react';
import { END } from 'redux-saga';
import img from '../../assets/images/users/avatar-1.jpg';
import defaultImage from '../../assets/images/users/default.jpg';

const Breadcrumb = (props) => {
  const { subject1, subject2 } = props;
  return (
    <div calss="container-sm">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="{% url 'home' %}">{subject1}</a>
          </li>
          <li className="breadcrumb-item">
            <a href="{% url 'board_topics' topic.board.pk %}">{subject2}</a>
          </li>
          {/* <li class="breadcrumb-item active">subject</li> */}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
