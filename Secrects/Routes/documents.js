import express from "express";
const router = express.Router();

let data = {
  "tranthanhloisd@gmail.com": [
    "i am sorry",
    "not my fault",
    "binance is bad",
    "kevin is my best friend",
  ],
  "caroline@alameda.com": [
    "stop loss is bad",
    "conforable with risk",
    "never lost a trade",
    "alameda rocks!",
  ],
};

const getDocuments = async (req, res) => {
  try {
    res.status(200).json({
      data: data,
      message: "Successfully checked secrect from service"
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getDocuments);
export default router;