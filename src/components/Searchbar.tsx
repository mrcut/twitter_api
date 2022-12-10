import "./Searchbar.css";
import React, { useState } from "react";
import { getTweetByKeyword } from "../api/api-requests";

export function Searchbar() {
  const [tweetList, setTweetList] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearch = () => {
    getTweetByKeyword(message)
      .then((response) => {
        const tweets = response.data;
        console.log("message : " + message);
        console.log(tweets);
        setTweetList((actual: string[]) => tweetList);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
            <button type="submit" onClick={handleSearch}>
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
