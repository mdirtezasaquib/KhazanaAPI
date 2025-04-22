import { useContext } from "react";
import { CommentContext } from "../contextApi/CommentContext";

const Comments = () => {
  const { comments } = useContext(CommentContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">User Comments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-xl shadow-md p-5 border-l-4 border-teal-500"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              @{comment.user.username}
            </h2>
            <p className="text-gray-700 mb-2 italic">"{comment.body}"</p>
            <p className="text-sm text-gray-500">Post ID: {comment.postId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
