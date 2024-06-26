import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Sam");

  const handleClick = () => {
    setName("Alan");
  };

  return (
    <div className="home p-4">
      <h2 className="text-2xl font-medium">Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
