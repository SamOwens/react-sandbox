import { useState } from "react";

const Home = () => {
  let testData = "Value Z";

  const [name, setName] = useState("Sam");
  const [testValue, setTestValue] = useState("Value X");

  const handleClick = () => {
    setName("Shola");
    setTestValue(testData);
  };

  return (
    <div className="home p-4">
      <h2 className="text-2xl font-medium">Homepage</h2>
      <p>{name}</p>
      <p>{testValue}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
