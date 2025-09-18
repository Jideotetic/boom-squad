import { Outlet } from "react-router";
import Header from "./Header";

function RootLayout() {
	return (
		<>
			<div className="fixed right-0 left-0 z-50 px-5 py-4 bg-white">
				<Header />
			</div>

			<main>
				<Outlet />
			</main>

			{/* <Footer /> */}
		</>
	);
}

export default RootLayout;
