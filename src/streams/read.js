import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
  const data = createReadStream("src/streams/files/fileToRead.txt");
  data.pipe(stdout);
  data.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
