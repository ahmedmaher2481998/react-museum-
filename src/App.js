import data from "./data/harvardArt";
import { NavLink, Route } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation/index";
function App() {
	return (
		<>
			<NavLink to={"/galleries"}>Gallery Navigation</NavLink>
			<Route path={"/"}>
				<GalleryNavigation galleries={data.records} />{" "}
			</Route>
		</>
	);
}

export default App;
