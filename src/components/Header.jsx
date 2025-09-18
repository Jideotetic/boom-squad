import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { Button } from "./ui/button";

function Header() {
	// const [sheetIsOpen, setSheetIsOpen] = useState(false);

	return (
		<header className="mx-auto flex w-full max-w-[1120px] items-center justify-between">
			<Logo />

			{/* DESKTOP NAV */}
			<nav className="hidden md:block">
				<ul className="flex gap-10">
					{NAV_LINKS.map((link) => (
						<li key={link.title}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "font-extrabold text-[#EAC506] hover:underline"
										: "text-[#262400] hover:text-[#EAC506] hover:underline"
								}
								to={link.href}
							>
								{link.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<Button size="lg" variant="secondary">
				Connect Wallet
			</Button>

			{/* MOBILE NAV */}
			{/* <MobileNavigation
				side="right"
				sheetIsOpen={sheetIsOpen}
				setSheetIsOpen={setSheetIsOpen}
				tag="home-page"
			>
				<div className="flex min-h-1/2 flex-col items-center justify-center gap-14 px-4 pt-24">
					<nav>
						<ul className="flex flex-col items-center gap-6">
							{LANDING_NAV_LINKS.map((link) => (
								<li key={link.title}>
									{link.title === "Testimonials" ? (
										<a
											className="text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
											href={link.href}
											onClick={() => setSheetIsOpen(false)}
										>
											{link.title}
										</a>
									) : (
										<NavLink
											className={({ isActive }) =>
												isActive
													? "font-extrabold text-[#2F0FD1] hover:underline"
													: "text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
											}
											to={link.href}
											onClick={() => setSheetIsOpen(false)}
										>
											{link.title}
										</NavLink>
									)}
								</li>
							))}
						</ul>
					</nav>

					<AuthButtons device="mobile" />
				</div>
			</MobileNavigation> */}
		</header>
	);
}

export default Header;
