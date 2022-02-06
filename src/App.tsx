import React , { useState } from "react";

const App: React.FC = (props) => {
  const [count,setCount] = useState(0)
  return (
    <>
      <div>Webpack is cool!</div>
      <button onClick={() => setCount(count+1)}>I clicked {count} times</button>
    </>
  )
};

export default App;
