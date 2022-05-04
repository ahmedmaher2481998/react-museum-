import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";
import ArtImageTitle from "./ArtImageTitle";
import "../index.css";
const GalleryView = ({ galleries }) => {
	const { Id } = useParams();
	// const { url } = useRouteMatch();
	const gal = galleries.find((el) => el.id === +Id);

	return (
		<>
			<h2 className='mx-auto rounded-xl p-2 text-center  selection:text-red-500 text-white text-xl w-10/12 bg-blue-500'>
				view {gal.title}
			</h2>
			<Route exact path={"/galleries/:Id"}>
				<ArtImageTitle art={gal} />
			</Route>
			<Route></Route>
		</>
	);
};
export default GalleryView;
