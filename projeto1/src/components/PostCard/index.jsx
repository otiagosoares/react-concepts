/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const PostCard = ({ id, cover, title, body }) => {
  return (
    <>
      <article className="post">
        <div className="post-thumb">
          <img src={cover} alt={title} />
        </div>
        <div className="post-content">
          <h2>
            {title} - {id}
          </h2>
          <p>{body}</p>
        </div>
      </article>
    </>
  );
};

PostCard.proTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
