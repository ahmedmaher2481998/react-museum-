import { Link, useParams } from "react-router-dom";
import data from "../data/harvardArt";
//end of imports

//(4) Render the title of the artwork wrapped in an external link to the actual artwork page in the Harvard Art Museum.
//(5) Render all the images of the artwork, the description, credit, and technique.

const ArtDescription = () => {
	const { Id, artId } = useParams();
	const art = data.records.find((g) => g.id === +Id);

	const artWork = art.objects.find((r) => r.id === +artId);
	// const artWork = art.
	console.log(artWork);
	return (
		<div className='w-10/10 rounded-xl bg-sky-600 p-5 mx-auto flex flex-col justify-center items-center'>
			<Link className={"link-primary"} to={`/galleries/${Id}`}>
				Back to {art.name} Gallery
			</Link>
			<div className='bg-sky-500 text-center'>
				<h1>
					<a
						className=' text-slate-800 mb-4 text-xl hover:text-slate-500 '
						href={`${artWork.url}`}
					>
						{artWork.title}
					</a>
				</h1>
				{artWork.images.map((img) => (
					<img
						className='rounded-xl mx-auto w-8/12 m-1 '
						key={img.imageid}
						src={img.baseimageurl}
						alt={artWork.title}
					/>
				))}
				<p
					className=' border-2 border-solid
				 border-zinc-800 h-20 mt-4 mb-4  w-6/11 mx-auto 
				  rounded-sm bg-sky-100 text-sm text-black p-5'
				>
					{artWork.description}
				</p>
				<p className='bg-gray-50 p-5'>{artWork.creditline}</p>
			</div>
		</div>
	);
};

export default ArtDescription;
