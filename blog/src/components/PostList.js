import { TbCircleXFilled } from 'react-icons/tb';

const PostList = ({ posts, title, handleDelete }) => {
  return (
    <div className="post-list max-w-3xl m-auto p4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {posts.map((post) => (
        <div
          className="group p-4 mb-4 rounded-md bg-slate-200 shadow-md hover:bg-slate-300 cursor-pointer relative transition"
          key={post.id}
        >
          <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
          <p className="pb-4">{post.intro}</p>
          <p className="text-xs text-right">Written by {post.author}</p>
          <button
            className="absolute top right -top-3 -right-3"
            onClick={() => handleDelete(post.id)}
          >
            <TbCircleXFilled className="red h-8 w-8 text-slate-800 hover:text-slate-900 invisible group-hover:visible transition" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
