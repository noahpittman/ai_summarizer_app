import { useEffect, useState } from "react";
import { Copy, CornerDownLeft, Link2 } from "lucide-react";
import { toast } from "react-hot-toast";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useLazyGetSummaryQuery } from "@/services/article";
import { Skeleton } from "./ui/skeleton";

const Demo = () => {
	const [article, setArticle] = useState({
		url: "",
		summary: "",
	});

	const [allArticles, setAllArticles] = useState([]);

	const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

	useEffect(() => {
		const articlesFromLocalStorage = JSON.parse(
			// @ts-ignore
			localStorage.getItem("articles")
		);

		if (articlesFromLocalStorage) {
			setAllArticles(articlesFromLocalStorage);
		}
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		toast.loading("Fetching your article...");
		const { data } = await getSummary({ articleUrl: article.url });
		console.log(data);
		if (data?.summary) {
			toast.dismiss();
			toast.success("Success");
			const newArticle = { ...article, summary: data.summary };

			const updatedAllArticles = [newArticle, ...allArticles];
			// @ts-ignore
			setAllArticles(updatedAllArticles);
			setArticle(newArticle);
			console.log(newArticle);

			localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
		} else {
			toast.dismiss();
			toast.error("Could not fetch article... Please try again later");
		}
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
                                rounded-r-none placeholder:text-accent dark:placeholder:text-primary focus:ring-2 
								 dark:focus:ring-primary
                                focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 peer"
									placeholder="Enter a URL"
								/>
								<button
									type="submit"
									className=" dark:peer-focus:ring-primary peer-focus:ring-accent peer-focus:ring-2 relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset bg-white  hover:bg-secondary dark:hover:bg-gray-200"
								>
									<CornerDownLeft
										className="-ml-0.5 h-5 w-5 dark:text-secondary"
										aria-hidden="true"
									/>
								</button>
							</div>
						</div>
					</div>
				</form>
				{/* URL History */}
				{allArticles.length > 0 && (
					<div className=" w-9/12 mx-auto">
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Article History</AccordionTrigger>
								<AccordionContent>
									{allArticles.map((item, index) => (
										<div>
											<div
												key={`link-${index}`}
												onClick={() => setArticle(item)}
												className="flex gap-4 my-2 items-center"
											>
												<button
													onClick={() => {}}
													className="hover:bg-card bg-secondary rounded-md h-[2rem] aspect-square flex items-center justify-center mt-2"
												>
													<Copy className="w-[60%] h-[60%] object-contain" />
												</button>
												<p className="font-[satoshi] flex-1 items-center truncate">
													{/* 
												// @ts-ignore */}
													{item.url}
												</p>
											</div>
										</div>
									))}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}
			</div>
			{/* Display Results */}
			<div className="my-10 max-w-full flex justify-center items-center">
				{isFetching ? (
					<div className="flex flex-col gap-3">
						<Skeleton className="w-[240px] h-[20px] rounded-full" />
						<Skeleton className="w-[400px] h-[12px] rounded-full" />
						<Skeleton className="w-[380px] h-[12px] rounded-full" />
						<Skeleton className="w-[390px] h-[12px] rounded-full" />
						<Skeleton className="w-[400px] h-[12px] rounded-full" />
						<Skeleton className="w-[380px] h-[12px] rounded-full" />
						<Skeleton className="w-[390px] h-[12px] rounded-full" />
					</div>
				) : error ? (
					<p className="font-[inter] font-bold text-primary text-center">
						Well, that wasn't supposed to happen...{" "}
						<span className="font-[satoshi] font-normal text-secondary">
							{/* 
							// @ts-ignore */}
							{error?.data?.error}
						</span>
					</p>
				) : (
					article.summary && (
						<div className="flex flex-col gap-3">
							<h2 className="font-[satoshi] font-semibold text-2xl">
								Article Summar<span className="text-primary">AI</span>zed
							</h2>
							<div>
								<p className="font-[satoshi] text-md">{article.summary}</p>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default Demo;
