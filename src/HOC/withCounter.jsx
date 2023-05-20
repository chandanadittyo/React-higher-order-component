import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  let newComponent = () => {
    const { count, setCount } = useState(0);

    setCount(count + 1);
  };

  return (
    <div>
      <OriginalComponent count={total} incrementCount={incrementCount} />
    </div>
  );
};

export default withCounter;
