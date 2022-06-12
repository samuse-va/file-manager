import path, { join } from "path";
import { fileURLToPath } from "url";

export const getPath = (url, file) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  const filePath = join(__dirname, file);
  return filePath;
};
