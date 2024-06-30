import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PostDetails = () => {
  const { id } = useParams();

  const { data } = useFetch(`http://localhost:8000/posts/${id}`);

  return (
    <div className="post">
      <div className="post-list max-w-3xl m-auto p-4">
        <h2 className="text-2xl font-semibold mb-4"> Post - {id}</h2>
      </div>
    </div>
  );
};

export default PostDetails;
