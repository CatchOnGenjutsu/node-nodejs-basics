import * as fs from "fs/promises";
import { open } from "node:fs";

const remove = async () => {
  open("src/fs/files/fileToRemove.txt", "r", (err, fd) => {
    if (err) {
      console.error("FS operation failed");
      return;
    }
    fs.unlink("src/fs/files/fileToRemove.txt");
  });
};

await remove();
