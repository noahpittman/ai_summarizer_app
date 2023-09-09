import { useState } from "react";

// import toast from "react-hot-toast";
import { CornerDownLeft, Link2 } from "lucide-react";

const Demo = () => {
	const [article, setArticle] = useState({
		url: "",
		summary: "",
	});

	const handleSubmit = async () => {
		alert("Submitted");
	};

	return (
		<section className="mt-4 mx-auto w-full max-w-xl">
			{/* Search */}
			<div className="flex flex-col w-full gap-2">
				<form
					className="relative flex justify-center items-center"
					onSubmit={handleSubmit}
				>
					<div className="w-full">
						<div className="flex rounded-md shadow-sm">
							<div className="relative flex flex-grow items-stretch focus-within:z-10">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Link2 className="h-5 w-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									type="url"
									name="url"
									value={article.url}
									onChange={(e) => {
										setArticle({ ...article, url: e.target.value });
									}}
									required
									id="url"
									className=" w-full rounded-sm text-black
                                border-0 py-1.5 pl-10 ring-1 ring-inset 
                                rounded-r-none placeholder:text-accent focus:ring-2 
                                focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 peer"
									placeholder="Enter a URL"
								/>
								<button
									type="submit"
									className=" peer-focus:ring-accent peer-focus:ring-2 relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset bg-white  hover:bg-secondary"
								>
									<CornerDownLeft
										className="-ml-0.5 h-5 w-5 "
										aria-hidden="true"
									/>
								</button>
							</div>
						</div>
					</div>
				</form>
				{/* URL History */}
			</div>
			{/* Display Results */}
		</section>
	);
};

export default Demo;
