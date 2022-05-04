import { NavLink, useRouteMatch } from "react-router-dom";
import "./GalleryNavigation.css";

// import Gallery from "./Gallery";
const GalleryNavigation = ({ galleries }) => {
	const { url } = useRouteMatch();
	// console.log(url, "index");
	return (
		<nav>
			{galleries.map((gallery) => {
				return (
					<>
						<NavLink to={`${url}/${gallery.id}`}>
							{gallery.name}
						</NavLink>
						<br />
					</>
				);
			})}
		</nav>
	);
};
export default GalleryNavigation;
