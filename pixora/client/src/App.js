import React from "react";
import { FaHome, FaCompass, FaHeart, FaUser } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Pixora</h2>
        <input className="search" placeholder="Search" />
        <div className="nav-icons">
          <FaHome />
          <FaCompass />
          <FaHeart />
          <FaUser />
        </div>
      </nav>

      <div className="container">

        {/* LEFT SIDE */}
        <div className="feed">

          {/* Stories */}
          <div className="stories">
            {["designhub","travelnow","foodie.co","techbites","artistry"].map((name,i)=>(
              <div className="story" key={i}>
                <img src={`https://i.pravatar.cc/60?img=${i+10}`} alt="" />
                <p>{name}</p>
              </div>
            ))}
          </div>

          {/* Post 1 */}
          <div className="post">
            <div className="post-header">
              <div className="user">
                <img src="https://i.pravatar.cc/40?img=15" alt="" />
                <span>urbanshots</span>
              </div>
              <FiMoreHorizontal />
            </div>

            <img
              className="post-img"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt=""
            />

            <div className="post-actions">
              <div>
                <FaRegHeart />
                <FaRegComment />
                <FaRegPaperPlane />
              </div>
              <FaRegBookmark />
            </div>

            <div className="likes">1,243 likes</div>
            <div className="caption">
              <b>urbanshots</b> Golden hour over the skyline ✨ Nothing beats this view.
            </div>
            <div className="time">2 HOURS AGO</div>
          </div>

          {/* Post 2 */}
          <div className="post">
            <div className="post-header">
              <div className="user">
                <img src="https://i.pravatar.cc/40?img=20" alt="" />
                <span>minimalista</span>
              </div>
              <FiMoreHorizontal />
            </div>

            <img
              className="post-img"
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt=""
            />

            <div className="post-actions">
              <div>
                <FaRegHeart />
                <FaRegComment />
                <FaRegPaperPlane />
              </div>
              <FaRegBookmark />
            </div>

            <div className="likes">876 likes</div>
            <div className="caption">
              <b>minimalista</b> Clean and calm vibes 🌿
            </div>
            <div className="time">5 HOURS AGO</div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar">
          <div className="profile">
            <img src="https://i.pravatar.cc/50?img=5" alt="" />
            <div>
              <b>pixora.official</b>
              <p>Pixora Inc.</p>
            </div>
          </div>

          <h4>Suggested for you</h4>

          {["creative.lab","startup.daily","dev.stories","pixel.perfect"].map((user,i)=>(
            <div className="suggestion" key={i}>
              <img src={`https://i.pravatar.cc/40?img=${i+30}`} alt="" />
              <span>{user}</span>
              <button>Follow</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
