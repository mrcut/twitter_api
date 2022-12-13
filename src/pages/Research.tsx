import "./Research.css";

interface TweetList {
  tweetList: string[];
}

export function Research({ tweetList }: TweetList) {
  // const TweetList = tweetList.map((p) => <li key={p.id}>{p.text}</li>);

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="animate__animated animate bounce card "
          style={{ width: "18rem" }}
        >
          <div className="container mt-3">
            <img
              src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
              className="card-img-top "
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title ms-1">Username</h5>
            <p className="card-text mb-5 ms-1">Twitter Post</p>

            <a href="#" className="btn btn-primary mb-1 mt-1 ">
              Check Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
