import { createWorker, PSM } from "tesseract.js";
import process, { exit } from "process";
import { readFile } from "fs/promises";
import startExtractingFlow from "./startExtractingFlow.js";

const config = JSON.parse(
  await readFile(new URL("./helpers/config.json", import.meta.url))
);

(async () => {
  const URL = process.argv.slice(2)[0];
  if (!URL) {
    console.log("Please provide an image URL as a argument");
    exit(1);
  }

  const worker = createWorker();

  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  await worker.setParameters({
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
  });

  const result = await startExtractingFlow(worker, URL, config);

  console.log("Results", result);
})();
