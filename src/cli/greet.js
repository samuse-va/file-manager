import process from "process";

export const parseName = () => {
  const name = process.argv[2].slice(11);
  console.log("Welcome to the File Manager, " + name + "!");
};
