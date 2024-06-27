import { useState } from 'react';
import PostList from './PostList';

// Grab post data
import postData from '../data/postData';

const Home = () => {
  const [posts, setPosts] = useState(postData);

  const handleDelete = (id) => {
    const tempPosts = posts.filter((post) => post.id !== id);
    setPosts(tempPosts);
  };

  const samPosts = posts.filter((post) => post.author === 'Sam');

  return (
    <div className="home p-4">
      <PostList
        posts={posts}
        title="All Posts"
        handleDelete={handleDelete}
      />
      {samPosts.length > 0 && (
        <PostList
          posts={samPosts}
          title="Sam's Posts"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
