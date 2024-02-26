import React from "react"; 
import YouTube from "react-youtube"; 
import GVData from "@pages/products/global-volunteer/data.json";

export default class YoutubeVideo extends React.Component { 
	render() { 
		const opts = { 
			height: "360",
			width: "640", 
			playerVars: { 
				autoplay: 1, 
			}, 
		}; 

		return ( 
			<div className='flex-row lg:flex justify-evenly p-9'> 
				{GVData.map((data) => (
					data.testimonials && data.testimonials.map((videodata) => (
						<YouTube key={videodata.id} videoId={videodata.video} opts={opts} onReady={this._onReady} />
					))
				))}
			</div> 
		); 
	} 

	_onReady(event) { 
		event.target.pauseVideo(); 
	} 
}
