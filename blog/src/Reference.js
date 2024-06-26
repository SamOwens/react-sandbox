const Reference = () => {
  // onClick Function
  const handleClick = (e) => {
    console.log(e, "Hello");
  };

  //onClick Function with Argument
  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="Reference">
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        onClick Function
      </button>
      <button onClick={(e) => handleClickAgain("Sam", e)}>
        onClick Function with Argument
      </button>
    </div>
  );
};

export default Reference;
