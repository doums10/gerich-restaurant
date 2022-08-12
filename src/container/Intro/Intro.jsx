import { React, useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = useRef();
	const handleVideo = () => {
		setPlayVideo((prevPLayvideo) => !prevPLayvideo);
		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};
	return (
		<div className="app__video">
			<video
				src={meal}
				type="video/mp4"
				ref={vidRef}
				loop
				muted
				controls={false}
			/>

			<div className="app__video-overlay flex__center">
				<div
					className="app__video-overlay_circle flex__center"
					onClick={handleVideo}
				>
					{playVideo ? (
						<BsPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
