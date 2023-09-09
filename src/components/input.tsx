import { CornerDownLeft, Link2 } from "lucide-react";

export default function Input() {
	return (
		<div className="w-full">
			<div className="flex rounded-md shadow-sm">
				<div className="relative flex flex-grow items-stretch focus-within:z-10">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Link2 className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<input
						type="url"
						name="url"
						value={value?.url}
						onChange={(e) => {}}
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
						className=" peer-focus:ring-accent relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset bg-white  hover:bg-secondary"
					>
						<CornerDownLeft className="-ml-0.5 h-5 w-5 " aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
}
