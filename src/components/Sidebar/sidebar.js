import React from "react";
import "../../components/Sidebar/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../../components/Sidebar/sidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption Icon={HomeIcon} text="Home" url="/" />
      <SidebarOption Icon={SearchIcon} text="Explore" url="/explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" url="/notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" url="/explore" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" url="/explore" />
      <SidebarOption Icon={ListAltIcon} text="Lists" url="/explore" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" url="/explore" />
      <SidebarOption Icon={MoreHorizIcon} text="More" url="/explore" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
