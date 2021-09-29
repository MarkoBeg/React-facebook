import React from 'react'
import './SidebarLeft.css'
import SidebarLeftOption from './SidebarLeftOption'
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History';
import FlagIcon from '@material-ui/icons/Flag';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import WorkIcon from '@material-ui/icons/Work';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export default function SidebarLeft() {
    return (
        <div className="SidebarLeft">
            <SidebarLeftOption Icon={PeopleIcon}  title='Friends' color="#28C6CD"></SidebarLeftOption>
            <SidebarLeftOption Icon={SupervisedUserCircleIcon} title='Groups' color="#28C6CD"></SidebarLeftOption>
            <SidebarLeftOption Icon={StorefrontIcon} title='Marketplace' color="#28C6CD"></SidebarLeftOption>
            <SidebarLeftOption Icon={OndemandVideoIcon} title='Watch' color="#2e81f4"></SidebarLeftOption>
            <SidebarLeftOption Icon={HistoryIcon} title='Memories' color='#2e81f4'></SidebarLeftOption>
            <SidebarLeftOption Icon={BookmarkIcon} title='Saved' color='#7F3499'></SidebarLeftOption>
            <SidebarLeftOption Icon={FlagIcon} title='Pages' color='#DF7E28'></SidebarLeftOption>
            <SidebarLeftOption Icon={EventAvailableIcon} title='Events' color='#DF2828'></SidebarLeftOption>
            <SidebarLeftOption Icon={WorkIcon} title='Jobs' color='brown'></SidebarLeftOption>
            <SidebarLeftOption Icon={ArrowDropDownIcon} title='See more' color='#000'></SidebarLeftOption>
            <hr />
        </div>
    )
}
