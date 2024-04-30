/* eslint-disable react/prop-types */

import ForumPost from './ForumPost';

const ForumThread = ({ thread }) => {
  return (
    <div className="forum-thread">
      <h3>{thread.title}</h3>
      {thread.posts.map(post => (
        <ForumPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ForumThread;
