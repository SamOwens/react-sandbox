import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PostDetails = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/posts/${id}`);

  return (
    <div className="post p-4">
      {error && (
        <div className="flex justify-center items-center font-semibold text-xl mt-10">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center items-center font-semibold text-xl mt-10">
          Loading...
        </div>
      )}
      {post && (
        <div className="post max-w-3xl m-auto">
          <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
          <p className="pb-4">{post.content}</p>
          <p className="text-xs text-right">Written by {post.author}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
