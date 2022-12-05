import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  let numCPUs = cpus().length;
  let counter = 10;
  const promisesArray = [];
  const resultArray = [];

  do {
    const promise = new Promise((res, rej) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: counter,
      });
      worker.on("message", (msg) => {
        res(msg);
      });
      worker.on("error", (err) => {
        resultArray.push({ status: "error", data: null });
      });
    });
    promise.then((val) => {
      resultArray.push({ status: "resolved", data: val });
    });
    counter++;
    numCPUs--;
    promisesArray.push(promise);
  } while (numCPUs > 0);
  await Promise.all(promisesArray);
  console.log(
    resultArray.sort((a, b) => {
      return a["data"] - b["data"];
    })
  );
};

await performCalculations();
