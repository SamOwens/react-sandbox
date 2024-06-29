import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetch Failed');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home p-4">
      {error && (
        <div className="flex justify-center items-center font-semibold text-xl mt-10">
          {error}
        </div>
      )}
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
