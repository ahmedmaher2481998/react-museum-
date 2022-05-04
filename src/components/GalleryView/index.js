import { useParams, NavLink, useRouteMatch } from "react-router-dom";
const GalleryView = ({ galleries }) => {
	const { Id } = useParams();
	const { url } = useRouteMatch();
	const gal = galleries.find((el) => el.id === +Id);

	return (
		<>
			<h1>hello {Id}</h1>
			<p>{gal.name}</p>
			{/* {galleries.map((gal) => {
				return +Id === +gal.id ? (
					<h1>{gal}</h1>
				) : // <NavLink key={gal.id} to={`${url}${gal.id}`}>
				// 	{gal.name}
				// </NavLink>
				null;
			})} */}
		</>
	);
};
export default GalleryView;
