import { useState } from 'react';
import PostList from './PostList';
import postData from '../data/postData';

const Home = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <div className="home p-4">
      <PostList
        posts={posts}
        title="All Posts"
      />
    </div>
  );
};

export default Home;
