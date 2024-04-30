/* eslint-disable react/prop-types */

import ForumThread from '../components/ForumThread';

const Forum = ({ threads }) => {
  return (
    <div className="forum">
      <h2>Anatomy Forum</h2>
      {threads.map(thread => (
        <ForumThread key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default Forum;
