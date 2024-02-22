import { readdir, statSync, writeFileSync } from "fs";
import path from "path";
const pagesDirectory = "pages/";
readdir(pagesDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  const pages = files.filter((file) =>
    statSync(path.join(pagesDirectory, file)).isDirectory()
  );

  writeFileSync("pages.json", JSON.stringify(pages));
});

