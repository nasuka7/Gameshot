import React, { useState } from "react";
import "./Box.css";
import { Avatar, Button } from "@material-ui/core"
import db from "./firebase";

const Box = () => {
  const [Message, setMessage] = useState("");
  const [Image, setImage] = useState("");

  const sendMessage = e => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "nazca",
      username: "kai",
      verified: true,
      text: Message,
      image: Image,
      avatar: ""
    });

    setMessage("");
    setImage("");
  }

  return (
    <div className="box">
      <form>
        <div className="box_input">
          <Avatar src="" />
          <input
          onChange={e => setMessage(e.target.value)} 
          value={Message} 
          placeholder="投稿してみましょう" 
          type="text"/>
        </div>
        <input 
        onChange={e => setImage(e.target.value)}
        value={Image}
        className="box_imageInput"
        placeholder="画像を投稿する" 
        type="text"
        />

        <Button onClick={sendMessage} type="submit" className="box_postButton">投稿する</Button>
      </form>
    </div>
  );
}

export default Box;