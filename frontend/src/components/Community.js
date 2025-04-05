import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Post from "./Post";
import "./Community.css";

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
         const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`http://localhost:5000/community`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(response.data);
        setPosts(response.data); // Update state with API data
      } catch (err) {
        alert("Cannot Load the posts", err);
      }
    };
    getPosts();
  }, []);

  // Function to update likes
  const updateLikes = async (postId,liked,likes) => {
    try{
      const user = JSON.parse(localStorage.getItem("user"));
      const post=posts.filter((post)=>post._id===postId)[0];
      console.log(postId,post);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
                ...post,
                likes,
                likedBy: liked
                  ? [...post.likedBy, user._id]
                  : post.likedBy.filter((id) => id !== user._id),
              }
            : post
        )
      );
    }catch(err){
      alert("Liking is not working",err);
      return false;
    }
    
  };

  // Function to update comments
  const updateComments = (postId, commentObject) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId
          ? {
              ...post,
              comments: [...post.comments, commentObject],
            }
          : post
      )
    );
  };
  

  return (
    <>
      {/* <nav className="nav-bar">
        <button className="nav-button" onClick={() => navigate("/home")}>
          Home
        </button>
        <button className="nav-button" onClick={() => navigate("/community")}>
          Community
        </button>
        <button className="nav-button logout" onClick={() => navigate("/")}>
          LogOut
        </button>
      </nav> */}
      <div className="community-content">
        <h1>Community</h1>
        <button className="add-post-btn" onClick={()=>navigate('/addPost')}>Add Post</button>
        {posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            updateLikes={updateLikes}
            updateComments={updateComments}
          />
        ))}
      </div>
    </>
  );
};

export default Community;
