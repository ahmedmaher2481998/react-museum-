import data from "./data/harvardArt";
import { NavLink, Route, Switch } from "react-router-dom";
import NorFound from "./components/NotFound";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {
	return (
		<div className='flex justify-center items-center p-6 flex-col bg-sky-300'>
			<div className='w-10' />
			<div className='w-10/12 p-4 mx-auto my-0 rounded-2xl hover:bg-sky-400 hover:text-black'>
				<NavLink className={"link-primary"} to={"/galleries"}>
					Gallery Navigation
				</NavLink>
				<NavLink className={"link-primary"} to={"/"}>
					Home
				</NavLink>
			</div>
			<img
				className='w-6/12 my-4 opacity-80 rounded-lg'
				src='https://www.christies.com/media-library/images/features/articles/2015/02/19/gallery_at_harvard/mainimage_gallery_harvard.jpg'
				alt='home page pic '
			/>
			{/* <NavLink to={"/galleryview"}>Gallery View</NavLink> */}
			<div className='mb-8'></div>

			<Switch>
				<Route exact path={"/"}>
					<h2 className='text-2xl first-letter:text-3xl text-white backdrop-blur-1'>
						Harvard Art Museum
					</h2>
					<p className='text-thin text-lg'>
						Look, but Don't Touch. Please select a Gallery in the
						navigation bar.
					</p>
				</Route>
				<Route exact path={"/galleries"}>
					<GalleryNavigation galleries={data.records} />{" "}
				</Route>
				<Route exact path={"/galleries/:Id"}>
					<GalleryView galleries={data.records} />
				</Route>
				<Route>
					<NorFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
