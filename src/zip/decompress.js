import { createGzip, createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const fileContent = createReadStream("src/zip/files/archive.gz");
  const destination = createWriteStream("src/zip/files/fileToCompress.txt");
  const unzip = createGunzip();
  fileContent.pipe(unzip).pipe(destination);
};

await decompress();
