import { Link, Route, useRouteMatch, useParams } from "react-router-dom";

//end of imports

//(4) Render the title of the artwork wrapped in an external link to the actual artwork page in the Harvard Art Museum.
//(5) Render all the images of the artwork, the description, credit, and technique.

const ArtDescription = () => {
	const { Id, artId } = useParams();
	return (
		<div>
			<Link to='/'>Back to Gallery {/*{galleryname}*/} </Link>
		</div>
	);
};
export default ArtDescription;
