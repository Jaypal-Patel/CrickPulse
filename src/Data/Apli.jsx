import React, { useEffect, useState } from "react";

function Apli() {
  const [data, setData] = useState([]);

  const API = "https://mocki.io/v1/98de5da9-2095-4038-b8b1-55c6f76fc324";

  const fetchApiData = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return <div>Apli</div>;
}

export default Apli;
