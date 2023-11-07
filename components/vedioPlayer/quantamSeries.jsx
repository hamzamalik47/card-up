import React from "react";
import ReactPlayer from "react-player";

const ReactVideoPlayerQuantum = (props) => {
  const setVideoPlayed = () => {
    if (props.setting && props.setting.video_type !== "repeat") {
      localStorage.setItem("is_seen_video", "Yes");
    }
  };
  return (
    <div className="wrappers">
      <ReactPlayer
        controls
        className="player"
        url={props.url}
        width="100%"
        height="385px"
        stopOnUnmount
        pip
        playsinline
        onPlay={setVideoPlayed}
      />
    </div>
  );
};

export default ReactVideoPlayerQuantum;
