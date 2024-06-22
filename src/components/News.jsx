import React from 'react';

const News = (props) => {
  return (
    <div>
      {props.news.length ? <h1>{props.title}</h1> : <h1>{props.error}</h1>}
      <div>
        {props.news.map((el, index) => (
          <div className="item" key={index}>
            {el.title}
            <ul className="items">
              <li>author: {el.author || 'no author'}</li>
              <li>points: {`${el.points || 0} points`}</li>
              <li>comments: {`${el.num_comments || 0} comments`}</li>
              <li>created: {el.created_at.slice(0, 10)}</li>
              <li>created: {new Date(el.created_at).toLocaleDateString()}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
