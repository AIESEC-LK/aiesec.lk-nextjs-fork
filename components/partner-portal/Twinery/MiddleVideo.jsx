// Twinery Video in the Middle
import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "300",
      width: "500",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="flex justify-center">
        <YouTube
          videoId="tV_Zx8rTr3s"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
