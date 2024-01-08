import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pretty from "./Pretty";
import "./Product.scss"
const Secrect = ({ token }) => {

  const isRun = useRef(false);
  const [data, setData] = useState(null);

  useEffect(() => {
  }, []);

  const fetchData = async () => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get("http://localhost:8000/api/v1/secrectdocuments", config);
      console.log(response.data);
      alert(response.data.message);
      setData(response.data);
      

    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
    <h1 className="heading">Secrect Service</h1>
      <button className="button" onClick={handleButtonClick}>GET SECRECT API</button>
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

export default Secrect;