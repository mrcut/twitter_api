export const urlApi = "https://api.twitter.com/2/";

export const authHeader = () => {
  const token =
    "AAAAAAAAAAAAAAAAAAAAAErrkAEAAAAA%2FIE38m5jivORLsvKESr2sL4HufU%3DjiFXDMFss8Xevs4qSwNwHb8wfWlCFyzZMttCzyGrUGt0EaAB7A";

  return { Authorization: "Bearer " + token };
};

export const urlTweetSearch = urlApi + "tweets/search/recent?query=";

export const urlUser = urlApi + "users/";

export const token =
  "Bearer " +
  "AAAAAAAAAAAAAAAAAAAAAErrkAEAAAAA%2FIE38m5jivORLsvKESr2sL4HufU%3DjiFXDMFss8Xevs4qSwNwHb8wfWlCFyzZMttCzyGrUGt0EaAB7A";

export const secret =
  "AAAAAAAAAAAAAAAAAAAAAErrkAEAAAAA%2FIE38m5jivORLsvKESr2sL4HufU%3DjiFXDMFss8Xevs4qSwNwHb8wfWlCFyzZMttCzyGrUGt0EaAB7A";
