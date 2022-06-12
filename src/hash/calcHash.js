import crypto from "crypto";
import fs from "fs";

export const calculateHash = async (pathToFile) => {
  const file = await fs.promises.readFile(pathToFile, "utf-8");
  const hash = crypto.createHash("sha256");
  hash.update(file);

  const hex = hash.digest("hex");
  console.log(hex);
};
