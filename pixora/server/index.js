import React, { useState } from "react";

function Post() {
  const [likes, setLikes] = useState(1243);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <img
        src="https://source.unsplash.com/random/600x400"
        alt="post"
        className="post-img"
      />

      <div className="actions">
        <button onClick={handleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <p>{likes} likes</p>
    </div>
  );
}

export default Post;
