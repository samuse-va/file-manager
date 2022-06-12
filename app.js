import process from "process";
import { parseName } from "./src/cli/greet.js";
import { copy } from "./src/fs/copy.js";
import { create } from "./src/fs/create.js";
import { list } from "./src/fs/list.js";
import { rename } from "./src/fs/rename.js";
import { calculateHash } from "./src/hash/calcHash.js";
const { stdout, stdin, exit } = process;

parseName();
stdout.write("");
stdin.on("data", (data) => {
  let comand = data.toString();

  if (comand.includes("add")) {
    let str = comand.slice(4);
    create(str);
    stdout.write("");
  }
  if (comand.includes("ls")) {
    list();
    stdout.write("");
  }
  if (comand.includes("rn")) {
    rename();
  }
  if (comand.includes("cp")) {
    copy();
  }
  if (comand.includes("hash")) {
    let path = comand.slice(5);
    let pathToFileN = "./" + path.toString();
    let lengthFileN = pathToFileN.length;
    let lengthFile = lengthFileN - 1;
    let pathToFile = pathToFileN.slice(0, lengthFile);
    calculateHash(pathToFile);
  }
  if (comand.includes(".exit")) {
    stdout.write(
      "Thank you for using File Manager, " + process.argv[2].slice(11) + "!"
    );
    exit();
  }
});
