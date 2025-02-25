import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User } from "lucide-react";

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Sumit Kumawat", content: "Excited to start our Data Science journey! 🚀" },
    { id: 2, author: "Jane Doe", content: "Sharing a cool AI project I worked on!" },
  ]);

  const [newPost, setNewPost] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePostSubmit = () => {
    if (newPost.trim() !== "" && authorName.trim() !== "") {
      setShowConfirmation(true);
    }
  };

  const confirmPost = () => {
    const post = {
      id: posts.length + 1,
      author: authorName,
      content: newPost,
    };
    setPosts([post, ...posts]);
    setNewPost("");
    setAuthorName("");
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto text-white">
      <br></br>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      ><br></br>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Welcome to the Community 🚀
        </h1>
        <p className="text-lg text-gray-400">Connect, Share & Grow Together!</p>
      </motion.div>

      {/* Post Submission */}
      <div className="bg-white/10 p-4 rounded-xl border border-white/10 mb-6">
        <input
          type="text"
          className="w-full bg-transparent text-white p-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none mb-2"
          placeholder="Your Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <textarea
          className="w-full bg-transparent text-white p-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none"
          rows={3}
          placeholder="Share something with the community..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          onClick={handlePostSubmit}
          className="mt-2 flex items-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
        >
          <Send className="w-5 h-5 mr-2" /> Submit
        </button>
      </div>

      {showConfirmation && (
        <div className="bg-gray-800 p-4 rounded-lg text-center mb-6">
          <p className="text-gray-300 mb-2">Are you sure you want to submit this post?</p>
          <button
            onClick={confirmPost}
            className="mr-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
          >
            Yes
          </button>
          <button
            onClick={() => setShowConfirmation(false)}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
          >
            No
          </button>
        </div>
      )}

      {/* Community Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-400/50"
          >
            <div className="flex items-center space-x-3 mb-2">
              <User className="w-6 h-6 text-blue-400" />
              <p className="font-bold text-blue-300">{post.author}</p>
            </div>
            <p className="text-gray-300">{post.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;
