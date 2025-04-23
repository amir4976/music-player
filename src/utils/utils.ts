const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password: string) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

const createJWT = async (email: string) => {
  const createJWT = await jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return createJWT;
};



const verifyToken = async (token: string) => {
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

const verifyPassword = async (password: string, hashPassword: string) => {
  const isMatch = await bcrypt.compare(password, hashPassword);
  return isMatch;
};

export {
    hashPassword,
    createJWT,
    verifyToken,
    verifyPassword,
}