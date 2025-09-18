import { Link, useNavigate } from "react-router";

function Logo() {
	const navigate = useNavigate();

	return (
		<Link
			href="/"
			onClick={(e) => {
				e.preventDefault();

				navigate("/");
				window.scrollTo({
					top: 0,
				});
			}}
			className="text-[22px] font-black text-[#060708]"
		>
			BOOM.Squad
		</Link>
	);
}

export default Logo;
