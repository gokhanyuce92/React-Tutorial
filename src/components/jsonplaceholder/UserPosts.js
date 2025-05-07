import React, { memo } from 'react';

function UserPosts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>
            <strong>Author:</strong> {post.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default memo(UserPosts);
