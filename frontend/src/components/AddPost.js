import { useState ,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import "./AddPost.css";

const AddPost = () => {
  const [text, setText] = useState("");
  const [level, setLevel] = useState("Easy");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const editingPost = location.state?.post;

  useEffect(() => {
    if (editingPost) {
      setText(editingPost.text);
      setLevel(editingPost.level);
      setTags(editingPost.tags.join(", "));
    }
  }, [editingPost]);

  const handlePostSubmit = async () => {
    if (!text.trim()) return alert("Post content cannot be empty!");

    const user = JSON.parse(localStorage.getItem("user"));
    const postData = {
      username: user.name,
      text: text.trim(),
      level,
      tags: tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== ""),
    };

    try {
      setLoading(true);
      if (editingPost) {
        await axios.patch(`http://localhost:5000/community/${editingPost._id}`, postData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      } else {
        await axios.post("http://localhost:5000/community", postData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      }
      setSuccessMsg("✅ Post added successfully!");
      setTimeout(() => navigate("/community"), 1500);
    } catch (err) {
      alert("Failed to add post.",err);
    } finally {
      setLoading(false);
    }
    // navigate("/community");
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
    <div className="add-post-container">
      <h2>Create a New Post 📝</h2>
      <textarea
        className="text-input"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
      />

      <div className="form-row">
        <label>Difficulty Level:</label>
        <select className="select-input" value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="form-row">
        <label>Tags (comma separated):</label>
        <input
          className="tag-input"
          type="text"
          placeholder="e.g. fitness, workout"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={handlePostSubmit} disabled={loading}>
        {loading ? "Posting..." : "Submit Post"}
      </button>

      {successMsg && <p className="success-msg">{successMsg}</p>}
    </div>
    </>
  );
};

export default AddPost;
