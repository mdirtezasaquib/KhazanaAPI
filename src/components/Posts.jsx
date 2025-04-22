import { useContext } from "react";
import { PostContext } from "../contextApi/PostContext";

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm mb-3">
              {post.body.length > 150 ? post.body.slice(0, 150) + "..." : post.body}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              👍 Likes: {post.reactions.likes} | 👎 Dislikes: {post.reactions.dislikes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
