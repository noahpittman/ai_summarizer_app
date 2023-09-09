import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Toaster />
		</Provider>
	</React.StrictMode>
);
