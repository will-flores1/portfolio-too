interface Props {
	githubLink: string;
	demoImg: string;
	title: string;
	description: string;
	demoLink?: string;
}

function ProjectTemplate(props: Props) {
	return (
		<div className=" dark:text-white/90 text-black/90 group mx-auto">
			<a href={props.githubLink} target="_blank" rel="noreferrer">
				<img
					src={props.demoImg}
					alt="thumbnail"
					className="rounded-xl mb-4 w-fit h-44 md:h-fit mx-auto"
				/>
				<div className="flex justify-center items-center">
					<p className="text-xl md:text-lg font-medium group-hover:opacity-70 transition duration-500 ease-in-out">
						{props.title}
					</p>
					<img
						src="./assets/github.svg"
						alt=""
						className="h-6 w-6 lg:h-5 lg:w-5 fill-darkMoon pt-1 ml-2 group group-hover:opacity-25 transition duration-500 ease-in-out"
					/>
				</div>
				<p className="font-normal pt-1 md:text-sm text-black dark:text-white/90 group-hover:opacity-70 transition duration-500 ease-in-out">
					{props.description}
				</p>
			</a>
			{/* <a
				href={props.demoLink}
				target="_blank"
				rel="noreferrer"
				className="pl-3 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
			>
				Live
			</a>
			<a
				href={props.githubLink}
				target="_blank"
				rel="noreferrer"
				className="p-3 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
			>
				Source-code
			</a> */}
		</div>
	);
}

export default ProjectTemplate;
