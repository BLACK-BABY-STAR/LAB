import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using fetch API
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => {
    //     setPosts(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     setLoading(false);
    //   });

    // Using axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
