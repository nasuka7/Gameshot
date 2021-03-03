import React from "react";
import "./Box.css";
import { Avatar, Button } from "@material-ui/core"

const Box = () => {
  return (
    <div className="box">
      <form>
        <div className="box_input">
          <Avatar src="" />
          <input placeholder="投稿してみましょう" type="text"/>
        </div>
        <input 
        className="box_imageInput"
        placeholder="画像を投稿する" 
        type="text"
        />

        <Button className="box_postButton">投稿する</Button>
      </form>
    </div>
  );
}

export default Box;