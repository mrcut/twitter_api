import "./Searchbar.css";
import React, { useState } from "react";
import { getTweetByKeyword } from "../api/api-requests";
import { Link } from "react-router-dom";
import { authHeader, secret, token } from "../api/constantes";
import { Client } from "twitter-api-sdk";

export function Searchbar() {
  const [tweetList, setTweetList] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // const handleSearch = (url: string, newTab: boolean) => {
  // getTweetByKeyword(message)
  //   .then((response) => {
  //     const tweetData = response.data;
  //     console.log("recherche : " + message);
  //     console.log("reponse.id :" + response.data.data[1].id);
  //     console.log("reponse : " + response.data.data[1].text);
  //     console.log("tweetData : " + tweetData);
  //     setTweetList((actual) => tweetData);
  //     console.log("response.data : " + response.data.data[1]);
  //     console.log("Tweetlist : " + tweetList);
  //     newTab
  //       ? window.open(url, "_blank", "noopener noreferrer")
  //       : (window.location.href = url);
  //   })
  //   .catch((err) => {
  //     console.log("erreur : " + err.response.data.detail);
  //   });

  //   fetch("https://api.twitter.com/2/tweets/search/recent?query=" + message, {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       Authorization: token,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((json) => console.log(json));
  //   newTab
  //     ? window.open(url, "_blank", "noopener noreferrer")
  //     : (window.location.href = url);
  // };

  async function searchTweet() {
    // const client = new Client(import.meta.env.VITE_BEARER_TOKEN as string);
    const client = new Client(secret);
    const response = await client.tweets.tweetsRecentSearch({
      query: message,
    });
    const data = JSON.stringify(response, null, 2);
    setTweetList(data);
    console.log(setTweetList);

    console.log("response", JSON.stringify(response, null, 2));
  }

  const handleSearch = (url: string, newTab: boolean) => {
    searchTweet();
    newTab
      ? window.open(url, "_blank", "noopener noreferrer")
      : (window.location.href = url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="cover">
        <div className="tb">
          <div className="td">
            <input
              type="text"
              placeholder="Search"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="td" id="s-cover">
            <Link target="_blank" state={tweetList} to="/research">
              <button
                type="submit"
                onClick={() => handleSearch("/research", true)}
              >
                <div id="s-circle"></div>
                <span></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
