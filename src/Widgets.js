import React from 'react';
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import { Search } from '@material-ui/icons';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <Search className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="jassNadhirah"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.youtube.com/watch?v=ou2aUdKnumQ&ab_channel=JoeSiPenglipurLara"}
                    options={{ text: "reactjs is awesome", via: "jassNadhirah" }} />
            </div>

        </div>
    );
}

export default Widgets;