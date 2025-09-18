import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
	return (
		<>
			<div className="fixed right-0 left-0 z-50 px-5 py-4 bg-white">
				<Header />
			</div>

			<main>
				<Outlet />
			</main>

			<div className="bg-[#0B0F15] px-5 py-10">
				<Footer />
			</div>
		</>
	);
}

export default RootLayout;
