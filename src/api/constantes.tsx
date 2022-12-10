export const urlApi = "https://api.twitter.com/2/";

export const authHeader = () => {
  const token =
    "AAAAAAAAAAAAAAAAAAAAAErrkAEAAAAAbZkCGOu95aSq2I0V8R1WzrxgN7U%3DBgeHPnTf6vUl2XqMgnLUC32htsBVnhwTfQClSI7Mv1Y7XKYUbw";

  return { Authorization: "Bearer " + token };
};

export const urlTweetSearch = urlApi + "tweets/search/recent?query=";

export const urlUser = urlApi + "users/";
