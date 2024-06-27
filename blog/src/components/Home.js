import { useState } from 'react';
import PostList from './PostList';

// Grab post data
import postData from '../data/postData';

const Home = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <div className="home p-4">
      <PostList
        posts={posts}
        title="All Posts"
      />
      <PostList
        posts={posts.filter((post) => post.author === 'Sam')}
        title="Sams Posts"
      />
    </div>
  );
};

export default Home;
