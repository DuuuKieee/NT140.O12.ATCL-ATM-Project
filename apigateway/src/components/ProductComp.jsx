import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ProductComp.scss";
const ProductsComp = ({ token, id ,name, info }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedInfo, setUpdatedInfo] = useState(info);

  const handleUpdate = async () => {
    // Gửi yêu cầu cập nhật thông tin sản phẩm tới máy chủ
    // Sử dụng updatedName và updatedInfo để lấy thông tin mới
    
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios
        .put(`http://localhost:8000/api/v1/update/${id}`, {
          name: updatedName,
          info: updatedInfo,
        },
          config
        );
        alert(response.data.message);
    } catch (error) {
        console.error(error);
      }
  };

  const handleDelete = async () => {
    // Gửi yêu cầu cập nhật thông tin sản phẩm tới máy chủ
    // Sử dụng updatedName và updatedInfo để lấy thông tin mới
    
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios
        .post(`http://localhost:8000/api/v1/remove`, 
        {
          body: {
            id: id,
          },
        },
          config
        );
        alert(response.data.message);
        console.log(response.data);
    } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="ProductContent">
      {isUpdating ? (
        <div className="Product">
          <input className="input"
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input className="input"
            type="text"
            value={updatedInfo}
            onChange={(e) => setUpdatedInfo(e.target.value)}
          />
          <button className="Nuts" onClick={handleUpdate}>Lưu</button>
          <button className="Nuts" onClick={() => setIsUpdating(false)}>Hủy</button>
        </div>
      ) : (
        <div className="Product">
          <div className="Title">{name}</div>
          <div className="Detail"> {info}</div>
          <button className="Nuts" onClick={() => setIsUpdating(true)}>Cập nhật</button>
          <button className="Nuts" onClick={handleDelete}>Xóa</button>
        </div>
      )}
    </div>
  );
};

export default ProductsComp;