import React from "react";

import "./Card.css";
// functional stateless component
function Card2(props) {

  function run() {
    console.log('running');
  }

  function withCount(fn) {
    let n = 0;
    return function() {
      console.log(`run | ${++n}`);
      return fn();
    }
  }

  const runWithCount = withCount(run);
  runWithCount();
  runWithCount();
  runWithCount();
  return (
    <div></div>
  );
}

export default Card2;
