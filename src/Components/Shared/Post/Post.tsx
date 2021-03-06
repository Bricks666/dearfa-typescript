import React, { FC } from "react";
import { Date, Photo, FullName, Like } from "..";
import { useLike } from "../../../Hooks";
import { IPost } from "../../../Types/Redux";

import PostStyle from "./Post.module.css";

interface IPostComponent {
	post: IPost;
}

export const Post: FC<IPostComponent> = ({ post }) => {
	const { toggleLike: likeHandler } = useLike(post.id);

	return (
		<article className={PostStyle.post}>
			<FullName className={PostStyle.author} id={1}>
				Кирилл Цыганков
			</FullName>
			<Date className={PostStyle.dateTime} date={post.date.toLocaleString()} />
			<Photo
				className={PostStyle.photo}
				photo=""
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<p className={PostStyle.content}>{post.content}</p>
			<Like
				className={PostStyle.like}
				status={post.like}
				likeHandler={likeHandler}
			/>
		</article>
	);
};
