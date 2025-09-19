import { Link } from "react-router";

function Logo() {
	return (
		<Link
			to="/"
			onClick={() => {
				window.scrollTo({
					top: 0,
				});
			}}
			className="text-[18px] sm:text-[22px] font-black text-[#060708]"
		>
			BOOM.Squad
		</Link>
	);
}

export default Logo;
