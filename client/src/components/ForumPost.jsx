/* eslint-disable react/prop-types */

const ForumPost = ({ post }) => {
  return (
    <div className="forum-post">
      <p>{post.author}: {post.content}</p>
    </div>
  );
};

export default ForumPost;
