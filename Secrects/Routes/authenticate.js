import jwtmod from "jsonwebtoken";

export default async (req, res, next) => {
  console.log(req);
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];
  console.log(token);
  if (token === null || token === undefined) {
    return res.sendStatus(401);
  }

  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

  const decodedToken = jwtmod.verify(token, public_key, {
    algorithms: ["RS256"],
  });
  console.log(decodedToken);
  const { exp } = decodedToken;
  const currentTimestamp = Math.floor(Date.now() / 1000); 
  console.log(exp + ":" + currentTimestamp);

  if (exp && exp < currentTimestamp) {
    console.log("Token has expired");
    return res.status(401).json({ message: "Token has expired" });
  }

  const { realm_access } = decodedToken;

  const hasAccess = realm_access && realm_access.roles.includes("Owner");  
  if (!hasAccess) {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
};