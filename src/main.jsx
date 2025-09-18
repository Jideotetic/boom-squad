import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: true, Component: HomePage },
			{ path: "mint", element: <></> },
			{ path: "burn-to-earn", element: <></> },
			{ path: "dao-system", element: <></> },
			{ path: "whitepaper", element: <></> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
