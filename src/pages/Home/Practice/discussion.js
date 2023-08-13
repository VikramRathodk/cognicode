// DiscussionBoard.js
import React, { useState } from 'react';

const DiscussionBoard = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPost('');
  };

  return (
    <div className="discussion-board">
      <h2>Discussion Board</h2>
      <div>
        <textarea
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
