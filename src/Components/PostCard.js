import React from "react";
import SvgIcon from "../Utils/SvgIcons";

const PostCard = ({
  profileImage = "",
  username = "",
  lastSeen = "",
  emoji = "",
  comments = "",
  isEdited = "",
  message = "",
  setShowModal = () => {},
}) => {
  return (
    <div
      className="create-post-container post-container"
      onClick={() => setShowModal(true)}
    >
      <div className="post-title-header">
        <div className="post-title">
          <img
            src={profileImage}
            alt="profile-image"
            width={44}
            height={44}
            className="profile-image"
          />
          <div className="profile-info">
            <div className="username">{username}</div>
            <div className="last-seen">{lastSeen}</div>
          </div>
        </div>
        <SvgIcon iconname="threeDots" />
      </div>
      <div className="input-container-post">
        <div className="message-logo-container">
          <img src={emoji} alt="message-logo" width={18} height={18} />
        </div>
        <textarea
          rows={3}
          className="input-field-post"
          value={message}
          disabled
        />
      </div>
      <div className="comments-container">
        <SvgIcon iconname="chatBubble" />
        <div className="last-seen">
          {comments} {comments > 1 ? "comments" : "comment"}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
