import React from "react"; 
import YouTube from "react-youtube"; 

export default class YoutubeVideo 
extends React.Component { 
render() { 
	const opts = { 
	height: "360",
    width: "640", 
	playerVars: { 
		autoplay: 1, 
	}, 
	}; 

	return ( 
	<div> 
		<YouTube videoId="sTnm5jvjgjM"
			opts={opts} onReady={this._onReady} /> 
	</div> 
	); 
} 

_onReady(event) { 
	event.target.pauseVideo(); 
} 
} 
