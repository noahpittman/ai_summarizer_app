import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/header";
import Summarizer from "@/components/summarizer";

const App = () => {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<main className="max-w-screen-lg mx-auto px-16">
				<Header />
				<Summarizer />
			</main>
		</ThemeProvider>
	);
};

export default App;
