import React from "react";
import Box from "./Box"
import Post from "./Post"
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
      {/* {Header} */}
        <h2>ホーム</h2>
      </div>

      {/* {Box} */}
      <Box />        

      {/* {Post} */}
      <Post />
      
    </div>
  );
}

export default Feed;