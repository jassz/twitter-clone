import React, { useState } from "react";
import "../../components/Tweetbox/tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
import ImageIcon from "@material-ui/icons/ImageSearchOutlined";
import PollIcon from "@material-ui/icons/PollOutlined";
import CalendarIcon from "@material-ui/icons/CalendarTodayOutlined";
import EmojiIcon from "@material-ui/icons/EmojiEmotionsOutlined";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Naja Nadhirah",
      username: "najanadhirahh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="button">
        {/* <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        /> */}

        <div className="icon-class">
        <ImageIcon className="icon" />
        <PollIcon className="icon"/>
        {/* <GifIcon className="icon border"/> */}
        <CalendarIcon className="icon"/>
        <EmojiIcon className="icon" />
        </div>
        

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
        </div>
        
      </form>
    </div>
  );
}

export default TweetBox;
