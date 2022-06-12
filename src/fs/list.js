import fs from "fs";

export const list = async () => {
  const files = await fs.promises.readdir("./");
  console.log(files);
};
