import { NavLink, useRouteMatch } from "react-router-dom";
import "./GalleryNavigation.css";

// import Gallery from "./Gallery";
const GalleryNavigation = ({ galleries }) => {
	const { url } = useRouteMatch();
	// console.log(url, "index");
	return (
		<nav className='bg-sky-400 opacity-80 text-center p-2 rounded-xl flex flex-col w-10/12'>
			{galleries.map((gallery) => {
				return (
					<>
						<NavLink
							className='hover:bg-sky-500 hover:text-white w-8/12
                             text-center p-2 rounded-2xl my-1 mx-auto  text-bold  text-xl'
							to={`${url}/${gallery.id}`}
						>
							{gallery.name}
						</NavLink>
					</>
				);
			})}
		</nav>
	);
};
export default GalleryNavigation;
