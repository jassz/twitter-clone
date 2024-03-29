import React, { useState, useEffect } from "react";
import TweetBox from "../Tweetbox/tweetBox";
import Post from "../Post/post";
import "./feed.css";
import db from "../../firebase";
import FlipMove from "react-flip-move";
import {
  TwitterTimelineEmbed
} from "react-twitter-embed";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* <div className="fyp">
        <span>For you</span>
      </div> */}

      <TweetBox />
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="9GAG"
          // options={{ height: 400 }}
        />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;