import React, { useState, useEffect } from "react";
import "../styles/feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const postsRefCollection = db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {typeof posts == "object" &&
        posts.map((post) => (
          <Post
            id={post.id}
            message={post.data.message}
            profilePic={post.data.profilePic}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
    </div>
  );
};

export default Feed;
