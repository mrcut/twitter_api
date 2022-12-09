import { Client } from "twitter-api-sdk";

const authClient = new auth.OAuth2User({
    client_id: process.env.CLIENT_ID,
    callback: "http://127.0.0.1:3000/callback",
    scopes: ["tweet.read", "users.read", "offline.access"],
  });
  
  const client = new Client(authClient);