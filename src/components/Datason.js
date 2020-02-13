import React, { useState, useEffect } from "react";

const Datason = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://json-faker-server.herokuapp.com/users");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
    
    </div>
  );
};
export default Datason;
