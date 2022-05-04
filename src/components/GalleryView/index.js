import { useParams, NavLink, useRouteMatch } from "react-router-dom";
import ArtImageTitle from "../ArtImageTitle/index";
import "../../index.css";
const GalleryView = ({ galleries }) => {
	const { Id } = useParams();
	// const { url } = useRouteMatch();
	const gal = galleries.find((el) => el.id === +Id);
	console.log(gal);

	return (
		<>
			<h2 className='mx-auto rounded-xl p-2 text-center  selection:text-red-500 text-white text-xl w-10/12 bg-blue-500'>
				gallery view here
			</h2>
			<ArtImageTitle art={gal} />
		</>
	);
};
export default GalleryView;
