import { FileService, operandClient } from "@operandinc/sdk";
import { spawn } from "child_process";

async function sync(): Promise<string> {
  const client = await operandClient(
    FileService,
    process.env.OPERAND_API_KEY as string
  );
  const resp = await client.listFiles({
    filter: {
      parentId: process.env.PARENT_ID as string,
    },
  });
  var successFiles: string[] = [];
  // Now we have a list of files, we can sync them to the content directory
  for (const file of resp.files) {
    // Each file has a download URL, we can use that to download the file
    const downloadUrl = file.downloadUrl;
    // We save each file using its unique name
    const fileName = file.name;
    // First we rm -rf the entire content directory
    // This is a bit of a hack, but it works for now
    const rm = spawn("rm", ["-rf", "content/posts/*"]);
    rm.on("close", (code) => {
      if (code !== 0) {
        console.log(`rm process exited with code ${code}`);
      }
    });

    // We use the `curl` command to download the file and then save it to the content directory
    // We need to attach the Authorization header to the request
    // The download is a blob, so we need to save it as a file
    const curl = spawn("curl", [
      "-H",
      `Authorization: Key ${process.env.OPERAND_API_KEY}`,
      downloadUrl,
      "-o",
      `content/posts/${fileName}`,
    ]);
    curl.on("close", (code) => {
      if (code == 0) {
        successFiles.push(fileName);
      } else {
        console.log(`curl process exited with code ${code}`);
      }
    });
  }
  return `Successfully synced ${
    successFiles.length
  } files:\n${successFiles.join("\n")}`;
}

export default sync;
