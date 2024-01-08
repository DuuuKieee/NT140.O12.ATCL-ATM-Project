import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductsComp from "./ProductComp";
import "./Product.scss"

const Products = ({ token }) => {
  const [data, setData] = useState(null);
  const [newProductName, setNewProductName] = useState("");
  const [newProductInfo, setNewProductInfo] = useState("");

  useEffect(() => {}, []);

  const fetchData = async () => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products",
        config
      );
      console.log(response.data);
      alert(response.data.message);
      setData(response.data);
    } catch (error) {
      alert(error.response.data.message);
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleAddProduct = async () => {

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/addproduct",
        {
          body: {
            name: newProductName,
            info: newProductInfo,
          },
        },
        config
      );
      alert(response.data.message);
      fetchData();  

      // Cập nhật danh sách sản phẩm sau khi thêm thành công

      // Đặt lại giá trị của biến trạng thái tên và thông tin sản phẩm mới
      setNewProductName("");
      setNewProductInfo("");
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const handleNewProductNameChange = (e) => {
    setNewProductName(e.target.value);
  };

  const handleNewProductInfoChange = (e) => {
    setNewProductInfo(e.target.value);
  };

  return (
    
    <div className="container">
      <h1>Thêm thông báo mới</h1>
      <div className="input-group">
        <input
          className="input-field"
          value={newProductName}
          onChange={handleNewProductNameChange}
          placeholder="Title"
        />
      </div>
      <div className="input-group">
        <input
          className="input-field"
          value={newProductInfo}
          onChange={handleNewProductInfoChange}
          placeholder="Thông tin"
        />
      </div>
      <button className="button" onClick={handleAddProduct}>Thêm thông báo</button>
      <h1>Thông Báo</h1>
      <button className="button" onClick={handleButtonClick}>GET API</button>

      {data ? (
        <div className="ProductList">
          {data.data.map((product, index) => (
            <ProductsComp
              key={index}
              token={token}
              id={product._id}
              name={product.product}
              info={product.info}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}

    </div>
  );
};

export default Products;