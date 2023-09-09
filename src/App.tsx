import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/header";
import Summarizer from "@/components/summarizer";

const App = () => {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Header />
			<Summarizer />
		</ThemeProvider>
	);
};

export default App;
