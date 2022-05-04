import data from "./data/harvardArt";
import { NavLink, Route, Switch } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation/index";
import GalleryView from "./components/GalleryView/index";
function App() {
	return (
		<>
			<NavLink to={"/"}>Gallery Navigation</NavLink>
			<br />
			<NavLink to={"/galleryview"}>Gallery View</NavLink>
			<div className='page-wrappe'>
				<br />
				<hr />
				<br />
			</div>
			<Route path={"/"}>
				<GalleryNavigation galleries={data.records} />{" "}
			</Route>

			<Switch>
				<Route exact path={"/galleries/:Id"}>
					<GalleryView galleries={data.records} />
				</Route>
				{/* <Route>
					<h2>Page Not Found!!</h2>
				</Route> */}
			</Switch>
		</>
	);
}

export default App;
