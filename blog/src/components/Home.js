import { useState, useEffect } from 'react';
import PostList from './PostList';

// Grab post data
import postData from '../data/postData';

const Home = () => {
  const [posts, setPosts] = useState(postData);

  const [name, setName] = useState('Sam');

  const handleDelete = (id) => {
    const tempPosts = posts.filter((post) => post.id !== id);
    setPosts(tempPosts);
  };

  const samPosts = posts.filter((post) => post.author === 'Sam');

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home p-4">
      <button onClick={() => setName('Luigi')}>Change Name</button>
      <p>{name}</p>
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
