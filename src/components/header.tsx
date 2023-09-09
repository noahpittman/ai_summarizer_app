import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header>
			<div className="grid grid-flow-col py-16">
				<div className=" grid">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<div className="flex justify-between">
								<h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-[inter] pr-4">
									Summar
									<span className="text-primary">AI</span>
									ze
								</h1>
								<div className="flex items-center gap-2 scale-[0.9] sm:scale-100">
									<ModeToggle />
									<Button
										variant={"outline"}
										onClick={() => {
											window.open("https://www.github.com/noahpittman");
										}}
									>
										GitHub
									</Button>
								</div>
							</div>
							<p className="mt-6 text-lg leading-8 font-[satoshi]">
								Input the URL of any article on the internet, and allow GPT-4 to
								summarize for you. Ask any questions you might have, and dive
								into an in depth conversation on any subject.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
