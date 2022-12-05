import * as fs from "fs/promises";

const list = async () => {
  try {
    const files = await fs.readdir("src/fs/files");
    if (files.length !== 0) {
      for (const file of files) {
        console.log(file);
      }
    }
  } catch (error) {
    console.error("FS operation failed");
  }
};

await list();
