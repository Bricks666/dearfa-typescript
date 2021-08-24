import { rerenderEntireTree } from "../../rerenderEntireTree";

function toggleLike(data, postId, isLiked) {
  const currentPost = this.posts.find((el) => el.id === postId);

  currentPost.like = createLike(isLiked, currentPost.like.count);

  rerenderEntireTree(data);
}

function createLike(isLiked, prevCount) {
  return {
    isLiked,
    count: prevCount + (isLiked ? 1 : -1),
  };
}

export { toggleLike };
