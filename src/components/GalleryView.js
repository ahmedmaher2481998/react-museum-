import { useParams, Switch, Route } from "react-router-dom";
import ArtImageTitle from "./ArtImageTitle";
import "../index.css";
import ArtDescription from "./ArtDescription";
const GalleryView = ({ galleries }) => {
	console.log("galleries", galleries);
	const { Id } = useParams();

	const gal = galleries.find((el) => el.id === +Id);
	console.log("gal", gal);
	return (
		<>
			<h2 className='mx-auto rounded-xl p-2 text-center  selection:text-red-500 text-white text-xl w-10/12 bg-blue-500'>
				view {gal.title}
			</h2>
			<Switch>
				<Route exact path={"/galleries/:Id"}>
					<ArtImageTitle art={gal} />
				</Route>
				<Route exact path={"/galleries:Id/art/:artId"}>
					<ArtDescription art={gal} />
				</Route>
			</Switch>
		</>
	);
};
export default GalleryView;
