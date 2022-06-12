import fs from "fs";
import { getPath } from "../getPath.js";

export const create = async (fileName) => {
  const file = "/" + fileName.toString() + ".txt";
  const src = getPath(import.meta.url, file);
  try {
    await fs.promises.writeFile(src, "", { flag: "wx" });
  } catch (err) {
    throw new Error("Operation failed");
  }
};
