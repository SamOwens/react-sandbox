import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home p-4">
      {isLoading && <div>Loading...</div>}
      {posts && (
        <PostList
          posts={posts}
          title="All Posts"
        />
      )}
    </div>
  );
};

export default Home;
