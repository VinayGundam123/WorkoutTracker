import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import "./Post.css"; // Assuming you have a CSS file for styling
const Post = ({ post, updateLikes, updateComments }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Like/Unlike
  useEffect(() => {
    const getLikedStatus = async () => {
      try {
        const postId=post._id;
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user.token);
        const response=await axios.get(`http://localhost:5000/community/like/${postId}?userId=${user._id}`,{
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(response.data.liked);
        setLiked(response.data.liked);
      }catch(err){
      alert("Error fetching like status", err);
      }
    }
    getLikedStatus();
  },[post._id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
  
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`http://localhost:5000/community/${post._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      window.location.reload(); // Or you can remove from state if better for UX
    } catch (err) {
      alert("Failed to delete the post");
    }
  };
  
  const handleEdit = () => {
    navigate("/addPost", { state: { post } }); // Send full post data to AddPost
  };


  const handleLike = async () => {
    try{
      const postId=post._id;
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(postId,post);
      const response=await axios.post(`http://localhost:5000/community/like/${postId}`,{userId:user._id} ,{
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const like=response.data.liked
      const likes=response.data.likes;
      console.log(!response.data.liked);
      setLiked(like);
      updateLikes(post._id,like,likes)
    }catch(err){
      alert("Liking is not working",err);
    }
  };

  const handleComment = () => {
    setCommentVisible(!commentVisible);
  }
  // Handle Comment Addition
  const addComment = async () => {
    if (newComment.trim() === "") return;

    const user = JSON.parse(localStorage.getItem("user"));
    const commentText = newComment.trim();
    const postId = post._id;

    try {
      console.log(user.name)
      const response = await axios.post(
        `http://localhost:5000/community/comment/${postId}`,
        { userId: user._id,username: user.name, comment: commentText },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response.data.comment);
      const savedComment = response.data.comment;
      updateComments(postId, savedComment); // Send comment object to Community component
      setNewComment("");
    } catch (err) {
      alert("Commenting is not working", err);
    }
  };


  return (
    <div key={post.id} className="post-card">
      {/* User Info */}
      <div className="post-header">
        <div className="post-header-left">
          {/* <img src={post.author.profilePic} alt="Profile" className="profile-pic" /> */}
          <div>
            <h3>{post.username}</h3>
            <p className="post-header-date">{new Date(post.timestamp).toLocaleDateString()}</p>
          </div>
        </div>
        <span className="post-difficulty">{post.level}</span> {/* Difficulty level aligned to right */}
        <div className="post-menu-wrapper">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
        {menuOpen && (
          <div className="menu-dropdown">
            <button onClick={handleEdit}>✏️ Edit</button>
            <button onClick={handleDelete}>🗑️ Delete</button>
          </div>
        )}
      </div>

      </div>


      {/* Post Content */}
      <div className="post-content">
        <p>{post.text}</p>
        {/* {post.content.imageUrl && <img src={post.content.imageUrl} alt="Post" className="post-image" />}
        {post.content.videoUrl && <video src={post.content.videoUrl} controls className="post-video"></video>} */}
      </div>

      {/* Engagement Section */}
      <div className="post-engagement">
        <button onClick={handleLike}>
          {liked ? "❤️" : "🤍"} {post.likes}
        </button>
        <button onClick={handleComment}>
          💬 {post.comments.length}
        </button>
      </div>

      {/* Comment Input */}
      {commentVisible &&
        <>
        <div className="comment-section">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button onClick={addComment} className="comment-btn">Post</button>
      </div>

      {/* Display Comments */}
      <div className="comments-list">
        {post.comments.map((c, index) => (
          c &&(<>
             
             <p key={index}><strong>{c.username}:</strong> {c.comment}</p></>)
        ))}
      </div>
      </>
    }

      {/* Tags */}
      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
