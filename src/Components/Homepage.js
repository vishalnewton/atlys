import React, { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import Modal from "./Modal";

const postsData = [
  {
    id: 1,
    username: "Theresa Webb",
    lastSeen: "5mins ago",
    emoji: "/hey.png",
    comments: 24,
    isEdited: false,
    profileImage: "/theresaWebb.png",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    username: "Marvin McKinney",
    lastSeen: "8mins ago",
    emoji: "/sad.png",
    comments: 16,
    isEdited: true,
    profileImage: "/marvinMcKinney.png",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="header-container">
        <div className="header-text">Hello Jane</div>
        <div className="sub-text">
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </div>
      </div>
      <CreatePost setShowModal={setShowModal} />
      {postsData.map((post) => {
        return (
          <PostCard
            key={post.id}
            username={post.username}
            lastSeen={post.lastSeen}
            emoji={post.emoji}
            comments={post.comments}
            isEdited={post.isEdited}
            message={post.message}
            profileImage={post.profileImage}
            setShowModal={setShowModal}
          />
        );
      })}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Homepage;
