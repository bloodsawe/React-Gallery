import React, { useState, useEffect, Fragment } from "react";
import { Img } from "../component/Gallery/Img/Img";

export const Favorite = () => {
	const [img, setImg] = useState(
		JSON.parse(localStorage.getItem("favorite")) || []
	);

	let renderImg = () => {
		return img.map(({ largeImageURL }, i) => (
			<Img key={i} index={i} largeImageURL={largeImageURL} />
		));
	};

	return <Fragment>{renderImg()}</Fragment>;
};
