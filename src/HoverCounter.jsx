import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCount}> Hoverd {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
