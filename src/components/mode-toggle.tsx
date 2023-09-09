import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export const ModeToggle = () => {
	const { setTheme } = useTheme();
	const [initialTheme, setInitialTheme] = useState(useTheme().theme);

	const toggle = () => {
		if (initialTheme == "light") {
			setTheme("dark");
			setInitialTheme("dark");
		} else {
			setTheme("light");
			setInitialTheme("light");
		}
	};

	return (
		<>
			<Button variant="outline" size="icon" onClick={toggle}>
				<Sun className="h-[1.35rem] w-[1.35rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-[1.35rem] w-[1.35rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		</>
	);
};
