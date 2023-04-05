import React from 'react';
import {
    TwitterTimelineEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import '../../App.css'
import Modal from '../Modal';


const Explore = () => {
    return (
        <div className='middle'>
            <div className='search'>
                <SearchIcon />
                <input
                    placeholder='Search Twitter'
                    value=""
                />
            </div>
            {/* <Modal /> */}
            <h2>Malaysia Trends</h2>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SenawangTV"
            // options={{ height: 400 }}
            />
        </div>
    );
}

export default Explore; 