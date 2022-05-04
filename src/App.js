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

			{/* <NavLink to={"/galleryview"}>Gallery View</NavLink> */}
			<div className='mb-8'></div>
			<Route exact path={"/"}>
				<h2>Harvard Art Museum</h2>
				<p>
					Look, but Don't Touch. Please select a Gallery in the
					navigation bar.
				</p>
			</Route>

			<Switch>
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
