import React from 'react';

const News = (props) => {
  console.log(props.news); //
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.news.map((el) => (
          <div>{el.author}</div>
        ))}
      </div>
    </div>
  );
};

export default News;
