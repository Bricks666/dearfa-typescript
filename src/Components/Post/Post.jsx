import React from "react";
import { Link } from "react-router-dom";
import { Like } from "../Like/Like";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    const id = props.post.authorId;
    const authorInfo = props.getInfo(id);
    return (
        <article className={PostStyle.post}>
            <Link className={PostStyle.authorLink} to={`/profile/${id}`}>
                <h5 className={PostStyle.author}>{authorInfo.fullName}</h5>
            </Link>

            <time className={PostStyle.dateTime} dateTime={props.post.date}>
                {ParseDate(props.post.date)}
            </time>
            <Link className={PostStyle.photoLink} to={`/profile/${id}`}>
                <Picture
                    className={`${PostStyle.photo} fake-photo`}
                    oneXSrc={authorInfo.avatar.url}
                    twoXSrc=""
                    alt={authorInfo.avatar.alt}
                />
            </Link>

            <p className={PostStyle.content}>{props.post.content}</p>
            <Like
                className={PostStyle.like}
                status={props.post.like}
                toggleLike={(isLiked) =>
                    props.toggleLike(props.post.id, isLiked)
                }
            />
        </article>
    );
}

export { Post };
