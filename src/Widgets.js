import React from "react";
import "./Widgets.css";
import {
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">

        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1540686196434579457"} options={{ height: 500 }} />

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="9GAG"
          options={{ height: 550 }}
        /> */}
        <TwitterShareButton
          url={"https://zaizainal.com/"}
          options={{ text: "Let's check it out", via: "najanadhirahh" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
