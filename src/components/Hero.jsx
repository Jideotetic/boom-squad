import { BsPatchCheckFill } from "react-icons/bs";

function Hero() {
	return (
		<div className="bg-linear-to-b from-white via-[#FFFADF] to-white py-45">
			<div className="mx-auto w-full max-w-[1200px] space-y-14 px-5">
				<div className="space-y-12">
					<div className="space-y-8 text-center text-[#1C1C1E]">
						<h1 className="text-[36px] font-bold md:text-[56px]">
							Fair Launch. No Rugs. Just Vibes
						</h1>

						<p className="mx-auto max-w-[772px] text-[#0B0F15] font-normal md:text-[20px]">
							BoomSquad (BOOM) is a community-driven token on Stellar Soroban
							designed to reward participation, enhance engagement, and secure
							long-term sustainability where value grows with the community and
							trust is locked in liquidity forever
						</p>

						<div className="flex justify-center flex-wrap md:text-[18px] items-center gap-8 text-[#0B0F15] font-bold">
							<div className="flex items-center gap-3">
								<BsPatchCheckFill />
								<span>Auto-Liquidity</span>
							</div>
							<div className="flex items-center gap-3">
								<BsPatchCheckFill />
								<span>Burn-to-Earn Incentives</span>
							</div>
							<div className="flex items-center gap-3">
								<BsPatchCheckFill />
								<span>Real-Time DEX Pricing</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
