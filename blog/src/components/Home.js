import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  // Initializing the 'posts' state variable to null using the useState hook
  // 'setPosts' is the function to update the 'posts' state

  useEffect(() => {
    // Defining a useEffect hook that runs once after the component mounts

    fetch('http://localhost:8000/posts')
      // Making a GET request to fetch posts from the server
      .then((res) => res.json())
      // Parsing the response as JSON
      .then((data) => setPosts(data));
    // Updating the 'posts' state with the fetched data
  }, []);
  // The empty dependency array means this useEffect runs only once, when the component mounts

  return (
    <div className="home p-4">
      {posts && (
        // Conditional rendering: only render PostList if 'posts' is not null
        <PostList
          posts={posts}
          title="All Posts"
        />
      )}
    </div>
  );
};

export default Home;
