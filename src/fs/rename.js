import * as fs from "fs/promises";
import { open } from "node:fs";

const rename = async () => {
  open("src/fs/files/wrongFilename.txt", "r", (err, fd) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("FS operation failed");
        return;
      }
    } else {
      open("src/fs/files/properFilename.md", "r", (err, fd) => {
        if (!err) {
          console.error("FS operation failed");
          return;
        } else {
          fs.rename(
            "src/fs/files/wrongFilename.txt",
            "src/fs/files/properFilename.md"
          );
        }
      });
    }
  });
};

await rename();
