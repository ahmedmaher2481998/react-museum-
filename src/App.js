import data from "./data/harvardArt";
import { NavLink, Route, Switch } from "react-router-dom";
import NorFound from "./components/NotFound";
import GalleryNavigation from "./components/GalleryNavigation/index";
import GalleryView from "./components/GalleryView/index";
function App() {
	return (
		<>
			<NavLink className={"link-primary"} to={"/galleries"}>
				Gallery Navigation
			</NavLink>

			<NavLink className={"link-primary"} to={"/"}>
				Home
			</NavLink>
			<br />
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
		</>
	);
}

export default App;
