import { Client } from "twitter-api-sdk";

async function main() {
  const client = new Client(process.env.BEARER_TOKEN as string);

  const response = await client.tweets.tweetsFullarchiveSearch({
    query: "tft\n\n",
  });

  console.log("response", JSON.stringify(response, null, 2));
}

main();
