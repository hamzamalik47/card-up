import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

const ReactVideoPlayer = (props) => {
  const setVideoPlayed = () => {
    if (props.setting && props.setting.video_type !== "repeat") {
      localStorage.setItem("is_seen_video", "Yes");
    }
  };


  return (
    <div className="video-wrappers">
      <ReactPlayer
        controls
        className="player"
        url={props.url}
        width="100%"
        height="100%"
        stopOnUnmount
        pip
        playsinline
        playing={props.autoPlay ? true : false}
        onPlay={setVideoPlayed}
      />
    </div>
  );
};

export default ReactVideoPlayer;
