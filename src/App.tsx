import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/header";
import Demo from "@/components/demo";

const App = () => {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Header />
			<Demo />
		</ThemeProvider>
	);
};

export default App;
