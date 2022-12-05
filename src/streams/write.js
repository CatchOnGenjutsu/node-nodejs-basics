import { createWriteStream } from "node:fs";
import { stdin, stdout } from "node:process";
import readline from "readline";

const write = async () => {
  const writableStream = createWriteStream("src/streams/files/fileToWrite.txt");

  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    prompt: "Enter some data to write to the file: ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    writableStream.write(line);
    rl.close();
    writableStream.end();
    process.exit(0);
  });
};

await write();
