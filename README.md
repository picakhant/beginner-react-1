# React Day 8

## Use state

```js
import React, { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <>
      <h1>{toggle ? "Yes" : "No"}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default App;
```
