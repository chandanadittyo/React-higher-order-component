// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  const newComponent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    let incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <OriginalComponent incrementCount={incrementCount} count={count} />
      </div>
    );
  };
  return newComponent;
};

export default withCounter;
