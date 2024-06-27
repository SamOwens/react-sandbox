import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      title: "Example Post 1",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis, enim in ornare fermentum, nibh ante iaculis tortor, vitae mollis tellus massa nec justo.",
      body: "Praesent hendrerit nisl scelerisque egestas posuere. Vestibulum mi quam, varius a nibh et, malesuada laoreet urna. Donec id justo lobortis, laoreet turpis volutpat, tincidunt ligula. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar sapien vel iaculis viverra. Nulla accumsan justo vitae velit sodales interdum. Suspendisse ac mi sed lorem bibendum vestibulum id nec tellus. Ut mollis pulvinar tellus. Praesent accumsan, felis a sodales condimentum, nulla enim luctus risus, in ultrices sapien erat sed tellus. Maecenas facilisis enim quis neque eleifend iaculis eu vel erat. Quisque nec diam id nunc euismod euismod.",
      author: "Sam",
      id: 1,
    },
    {
      title: "Example Post 2",
      intro:
        "Praesent hendrerit nisl scelerisque egestas posuere. Vestibulum mi quam, varius a nibh et, malesuada laoreet urna. Donec id justo lobortis, laoreet turpis volutpat.",
      body: "Sed ornare fringilla est a dapibus. Aliquam augue nunc, eleifend vitae facilisis sit amet, pharetra nec lacus. Sed odio lacus, iaculis id interdum ac, viverra quis neque. Donec nisl elit, maximus a sodales in, rhoncus at erat. Vestibulum nec justo eu dui volutpat tempor bibendum eget lacus. Nulla malesuada augue sit amet turpis semper, at ornare ligula efficitur. Cras luctus vulputate commodo. Vestibulum mauris turpis, eleifend ac leo sit amet, efficitur lobortis ligula. Ut at vestibulum mi, ac sollicitudin enim. Curabitur vestibulum malesuada auctor. In rhoncus facilisis metus a tempor.",
      author: "Silje",
      id: 2,
    },
    {
      title: "Example Post 3",
      intro:
        "Praesent non euismod eros. Aliquam velit mauris, eleifend quis aliquam eget, malesuada sed est. Integer non condimentum dolor. Pellentesque dapibus eleifend dolor.",
      body: "Fusce arcu erat, vulputate in ligula id, tempor commodo arcu. Nunc commodo ornare faucibus. Nullam tempus diam sed diam molestie, nec vulputate diam hendrerit. Aenean in vulputate tellus. Mauris posuere non justo non posuere. Suspendisse eu dignissim tellus. Aliquam ac nisi dignissim, convallis purus sed, auctor nisi.",
      author: "Willow",
      id: 3,
    },
  ]);

  return (
    <div className="home p-4">
      {posts.map((post) => (
        <div
          className="post-card p-4 mb-4 rounded-md bg-slate-200 shadow-md max-w-3xl m-auto hover:bg-slate-300 cursor-pointer"
          key={post.id}
        >
          <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
          <p className="pb-4">{post.intro}</p>
          <p className="text-xs text-right">Written by {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
