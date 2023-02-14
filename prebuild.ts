import sync from "./lib/sync";

export default async function execute() {
  try {
    console.log("Syncing files...");
    require("dotenv").config();
    const result = await sync();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

execute();
