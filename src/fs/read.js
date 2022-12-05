import * as fs from "fs/promises";

const read = async () => {
  try {
    const data = await fs.readFile("src/fs/files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(data);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await read();
