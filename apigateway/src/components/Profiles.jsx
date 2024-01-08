import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pretty from "./Pretty";
import "./Product.scss"

const Profiles = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Empty dependency array, so this effect runs only once on component mount

    // Fetch data here if needed on component mount
  }, []);

  const fetchData = async () => {
    console.log(token);
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/documents",
        config
      );
      console.log(response.data);
      // const jsonString = JSON.stringify(response.data, null, 2);
      setData(response.data);
      alert(response.data.message);

    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
    <h1 className="heading">Users Service</h1>
      <button className="button" onClick={handleButtonClick}>GET USER SERVICE</button>
      {data ? (
        <div>
          <Pretty data={data} />
        </div>
      ) : (
        <div>Protected</div>
      )}
    </>
  );
};

export default Profiles;