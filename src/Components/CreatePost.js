import React from "react";

const CreatePost = ({ setShowModal = () => {} }) => {
  return (
    <div className="create-post-container" onClick={() => setShowModal(true)}>
      <div className="create-post-title">Create Post</div>
      <div className="input-container-post">
        <div className="message-logo-container">
          <img src="/message.png" alt="message-logo" width={18} height={18} />
        </div>
        <input
          type="text"
          className="input-field-post"
          placeholder="How are you feeling today?"
          disabled
        />
      </div>
      <button className="post-button">Post</button>
    </div>
  );
};

export default CreatePost;
