import express from "express";
import { addProduct } from "./database.js"
const router = express.Router();

// let data = {
//   "tranthanhloisd@gmail.com": [
//     "i am sorry",
//     "not my fault",
//     "binance is bad",
//     "kevin is my best friend",
//   ],
//   "caroline@alameda.com": [
//     "stop loss is bad",
//     "conforable with risk",
//     "never lost a trade",
//     "alameda rocks!",
//   ],
// };

// const getDocuments = async (req, res) => {
//   try {
//     addProduct();
//     res.status(200).json({
//       name: "Dầu ăn",
//       price: "1000"
//     });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// const updateDocuments = async (req, res) => {
//   try {


//     res.status(200).json({ message: "Update successful." });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// router.get("/", getDocuments);
// router.post("/update", updateDocuments);

export default router;