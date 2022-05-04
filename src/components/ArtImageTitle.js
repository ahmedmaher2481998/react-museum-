import { Link, useRouteMatch } from "react-router-dom";

const ArtImageTitle = ({ art }) => {
	const { url } = useRouteMatch();
	console.log(art);
	return (
		<div className=' flex flex-wrap bg-blue-200 items-center rounded-xl mt-2 mx-auto justify-center w-10/12 h-1/1'>
			{art.objects.map((obj) => {
				// title --.title
				//color-pallet  .colors
				//description .-- .description
				return (
					<span className='  p-2 m-2 '>
						<Link to={`${url}/art/${obj.id}`}>
							<img
								className='rounded-xl w-36'
								src={obj.primaryimageurl}
								alt={obj.title}
							/>
						</Link>
						<span className='flex row my-5'>
							{obj.colors.map((c, i) => {
								return (
									<div
										key={i}
										className='w-2 h-2 mx-1'
										style={{ backgroundColor: c.color }}
									></div>
								);
							})}
						</span>
						<h4 className='w-36 text-center text-md text-slate-600'>
							{obj.title}
						</h4>
					</span>
				);
			})}
		</div>
	);
};
export default ArtImageTitle;
