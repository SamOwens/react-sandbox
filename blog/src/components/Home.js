import PostList from './PostList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/posts');

  return (
    <div className="home">
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
