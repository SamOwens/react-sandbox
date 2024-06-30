import { Link } from 'react-router-dom';

const PostList = ({ posts, title, handleDelete }) => {
  return (
    <div className="post-list content-container">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {posts.map((post) => (
        <div
          className="group p-4 mb-4 rounded-md bg-slate-200 shadow-md hover:bg-slate-300 cursor-pointer relative transition"
          key={post.id}
        >
          <Link to={`/post/${post.id}`}>
            <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
            <p className="pb-4">{post.intro}</p>
            <p className="text-xs text-right">Written by {post.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
