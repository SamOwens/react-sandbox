import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useHistory } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();

  const history = useHistory();

  const {
    data: post,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/posts/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="post content-container">
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
        <article className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
          <p className="pb-4">{post.content}</p>
          <p className="text-xs text-right mb-4">Written by {post.author}</p>
          <button
            onClick={handleDelete}
            className="button font-semibold text-black bg-red-500 hover:bg-red-600 m-auto "
          >
            Delete Post
          </button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
