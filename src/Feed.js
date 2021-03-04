import React, { useEffect, useState } from "react";
import Box from "./Box"
import Post from "./Post"
import "./Feed.css";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="feed">
      <div className="feed_header">
      {/* {Header} */}
        <h2>ホーム</h2>
      </div>

      <Box />

      {posts.map((post) => (
        <Post 
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

    </div>
  );
}

export default Feed;