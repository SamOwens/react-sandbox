import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Sam');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, intro, content, author };

    setIsLoading(true);

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      setIsLoading(false);
      // history.go(-1)
      history.push('/');
    });
  };

  return (
    <div className="create content-container">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <label className="input-label">Title</label>
        <input
          type="text"
          className="input-style"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="input-label">Intro</label>
        <textarea
          className="input-style"
          required
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        ></textarea>
        <label className="input-label">Content</label>
        <textarea
          className="input-style"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label className="input-label">Author</label>
        <select
          className="input-style"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Sam">Sam</option>
          <option value="Silje">Silje</option>
          <option value="Willow">Willow</option>
        </select>
        <div className="flex justify-end">
          {!isLoading && (
            <button className="button bg-slate-800 text-white hover:bg-slate-700">
              Add Post
            </button>
          )}
          {isLoading && (
            <button
              disabled
              className="button bg-slate-800 text-white hover:bg-slate-700"
            >
              Add Post
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
