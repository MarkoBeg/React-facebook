import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ReplyIcon from '@material-ui/icons/Reply';


export default function Post({username, timestamp, image, profilePic, message}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} alt={username} className="post-avatar"></Avatar>
                <div className="post-about">
                    <h4>{username}</h4>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post-message">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt='post' />
            </div>
            <div className="post-widgets">
                <div className="post-widget">
                    <ThumbUpIcon></ThumbUpIcon>
                    <p>Like</p>
                </div>
                <div className="post-widget">
                    <CommentIcon></CommentIcon>
                    <p>Comment</p>
                </div>
                <div className="post-widget">
                    <ReplyIcon></ReplyIcon>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}
