import dotenv from "dotenv";
import express from "express";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";
import { addProduct, getProduct, updateProduct, deleteProduct } from "./Routes/database.js"
import bodyParser from "body-parser";
import cors from "cors";


(async function () {
  dotenv.config();
  
  const { PORT } = process.env;
  const app = express();
  app.use(bodyParser.json());
  app.use(cors())
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );

  // app.use("/api/v1/products", authenticate, documents);
  app.get("/api/v1/products", authenticate, (req, res) =>{
    try {
      getProduct()
      .then((result) =>{
        console.log()
        res.status(200).json({ 
          data: result,
          message: "GET Successful"
         });
      })
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } )

  app.post("/api/v1/addproduct", authenticate, (req, res) =>{
    try {
      addProduct(req.body.body.name, req.body.body.info)
      .then((result) =>{
        res.status(200).json({ message: "Add thanh cong" });
      })
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
  
  app.put("/api/v1/update/:productId", authenticate, (req, res) => {
    try {
      const { productId } = req.params;
      const { name, info } = req.body;
      console.log(name);
      updateProduct(productId,name, info)
      .then((result) =>{
        res.status(200).json({ message: "Update thành công" });
      })

    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.post("/api/v1/remove", authenticate, (req, res) => {
    try {
      console.log("name");
      // updateProduct(productId,name, info)
      // .then((result) =>{
      //   res.status(200).json({ message: result });
      // })
      deleteProduct(req.body.body.id)
      .then((result) =>{
        res.status(200).json({ message: result });
      })
      console.log("thành công");
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });


})();