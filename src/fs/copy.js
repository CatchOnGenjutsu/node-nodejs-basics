import * as fs from "fs/promises";
const copy = async () => {
  try {
    const files = await fs.readdir("src/fs/files_copy");
    if (files) {
      console.error("FS operation failed");
      return;
    }
    throw err;
  } catch (err) {
    fs.mkdir("src/fs/files_copy", (err) => {
      if (err) throw err;
    });
    const files = await fs.readdir("src/fs/files");
    for (const file of files) {
      await fs.copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`);
    }
  }
};

copy();
