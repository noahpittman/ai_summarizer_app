import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header>
			<div className="grid grid-flow-col py-12 overflow-hidden">
				<div className=" grid">
					<div className="md:mx-auto max-w-7xl px-6 lg:px-8 mx-0">
						<div className="md:mx-auto max-w-2xl lg:mx-0 md:w-auto mx-0">
							<div className="flex flex-col-reverse md:flex-row md:justify-between">
								<h1 className="text-2xl font-bold tracking-tight sm:text-6xl font-[inter] pr-4">
									trySummar
									<span className="text-primary">AI</span>
									ze
								</h1>
								<div className="flex md:justify-normal justify-between md:pb-0 pb-4 items-center gap-2">
									<ModeToggle />
									<Button
										variant={"outline"}
										onClick={() => {
											window.open(
												"https://github.com/noahpittman/ai_summarizer_app"
											);
										}}
									>
										GitHub
									</Button>
								</div>
							</div>
							<p className="mt-6 text-lg leading-8 font-[satoshi]">
								Input the URL of any article on the internet, and allow GPT-4 to
								summarize for you.
								{/* Ask any questions you might have, and dive into an in depth conversation on any subject. */}
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
