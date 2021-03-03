import React from "react";
import "./Sidebar.css";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core";



const Sidebar = () => {
  return (
    <div className="sidebar">
      <SportsEsportsIcon className="sidebar_SportsEsportsIcon" />

      <SidebarOption active Icon={HomeIcon} text="ホーム" />
      <SidebarOption Icon={SearchIcon} text="検索" />
      <SidebarOption Icon={FormatListBulletedIcon} text="ゲーム一覧" />
      <SidebarOption Icon={NotificationsNoneIcon} text="通知" />
      <SidebarOption Icon={AccountCircleIcon} text="プロフィール" />
   
      {/* {投稿ボタン} */}
      <Button variant="outlined" className="sidebar_post" fullWidth> 
      投稿
      </Button>
    </div>
  );
}

export default Sidebar;