import React from "react";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
import introVideo from "./Untitled.mp4";
//import thum from "../../assets/img/trainer.jpeg";
//import thum from "../../assets/img/dumble.png"
function VideoRender() {
  return (
    // <section id="home">
      // <div className="container" >
        <Video
          autoPlay
          loop
          muted 
          //poster={thum}
          // onCanPlayThrough={() => {
          //   console.log("video play");
          // }}
        >
          <source src={introVideo} type="video/webm" />
        </Video>
      // </div>
    // </section>
  );
}

export default VideoRender;
