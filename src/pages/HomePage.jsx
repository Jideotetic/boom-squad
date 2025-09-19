import Hero from "@/components/Hero";

function HomePage() {
	return (
		<>
			<Hero />

			<div className="bg-white">
				<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10">
					<img
						className="mx-auto h-auto w-full sm:w-1/2"
						src="/Group 324.svg"
						alt=""
					/>

					<div className="flex items-center ">
						<div className="space-y-6 text-[#393F48]">
							<h2 className="text-[32px] font-bold text-[#0B0F15] md:text-[40px]">
								BoomSquad Lore
							</h2>

							<p className="text-[18px] font-normal md:text-[20px]">
								BoomSquad (BOOM) is a community-driven token on Stellar Soroban
								designed to reward participation, enhance engagement, and secure
								long-term sustainability.
							</p>

							<p className="text-[18px] font-normal md:text-[20px]">
								Unlike traditional tokens, BOOM integrates real-time DEX
								pricing, auto-liquidity, burn-to-earn incentives, and community
								voting. The result is a token economy where value grows with the
								community and trust is locked in liquidity forever.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="mx-auto space-y-8 w-full max-w-[1200px] px-5 py-10 pb-10 md:py-[104px] lg:px-10">
					<div>
						<span className="text-[#393F48] md:text-[24px] font-normal">
							Core Features
						</span>
						<h2 className="text-[30px] md:text-[40px] text-[#0B0F15] font-bold">
							The BOOM Engine
						</h2>
					</div>

					<div className="grid grid-cols-1 md:auto-rows-min md:grid-cols-2 gap-8">
						<div className="max-w-[544px] w-full mx-auto">
							<img src="/Frame 327.svg" alt="" />
							<div className="space-y-4 rounded-[4px] bg-[#FFFADA] px-4 pt-6 pb-8">
								<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
									Dynamic Minting Linked to DEX
								</h3>
								<p className="text-[#393F48] lg:text-[18px] font-normal">
									BOOM can be minted continuously until the fixed supply cap is
									reached, ensuring scarcity and long-term value preservation.
									Each mint price is automatically pegged to the real-time
									BOOM/XLM exchange rate on the Stellar DEX.
								</p>
							</div>
						</div>

						<div className="max-w-[544px] w-full mx-auto">
							<img src="/Frame 329.svg" alt="" />
							<div className="space-y-4 rounded-[4px] bg-[#FFFADA] px-4 pt-6 pb-8">
								<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
									Community Governance
								</h3>
								<p className="text-[#393F48] lg:text-[18px] font-normal">
									BOOM doubles as voting power, giving holders a direct voice in
									the ecosystem. From treasury spending, protocol upgrades,
									community campaigns and even proposals can be created by any
									holder with a minimum stake.
								</p>
							</div>
						</div>

						<div className="max-w-[544px] w-full mx-auto">
							<img src="/Frame 327 (1).svg" alt="" />
							<div className="space-y-4 rounded-[4px] bg-[#FFFADA] px-4 pt-6 pb-8">
								<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
									Burn Now, Flex Later
								</h3>
								<p className="text-[#393F48] lg:text-[18px] font-normal">
									You can voluntarily burn BOOM tokens into a smart contract
									vault and after a fixed vesting period, reclaim them with
									bonus rewards which increases scarcity and incentivizes
									loyalty by rewarding long-term holders.
								</p>
							</div>
						</div>

						<div className="max-w-[544px] w-full mx-auto">
							<img className="h-auto" src="/Frame 329.svg" alt="" />
							<div className="space-y-4 rounded-[4px] bg-[#FFFADA] px-4 pt-6 pb-8">
								<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
									Real-Time Liquidity & Security
								</h3>
								<p className="text-[#393F48] lg:text-[18px] font-normal">
									Every mint automatically adds liquidity to the BOOM/XLM pool,
									with LP tokens permanently burned so liquidity can never be
									withdrawn which guarantees a fair trading environment,
									rug-pull risk elimination and a trustless DEX listing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10">
					<img
						className="mx-auto h-auto w-full sm:w-1/2 lg:order-1 order-2 lg:w-full"
						src="/Group 324.svg"
						alt=""
					/>

					<div className="flex items-center lg:max-w-[520px] lg:order-2">
						<div className="space-y-6 text-[#393F48]">
							<h2 className="text-[30px] font-bold text-[#0B0F15] md:text-[40px]">
								BoomSquad Lore
							</h2>

							<p className="text-[18px] font-normal md:text-[20px]">
								BoomSquad (BOOM) is a community-driven token on Stellar Soroban
								designed to reward participation, enhance engagement, and secure
								long-term sustainability.
							</p>

							<p className="text-[18px] font-normal md:text-[20px]">
								Unlike traditional tokens, BOOM integrates real-time DEX
								pricing, auto-liquidity, burn-to-earn incentives, and community
								voting. The result is a token economy where value grows with the
								community and trust is locked in liquidity forever.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:flex-row px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10">
					<img
						className="mx-auto md:mx-0 h-auto w-full border sm:w-1/2 md:order-1 order-2"
						src="/Group 307.svg"
						alt=""
					/>

					<div className="flex items-center lg:max-w-[520px] border md:order-2">
						<div className="space-y-6 text-[#393F48]">
							<h2 className="text-[30px] font-bold text-[#0B0F15] md:text-[40px]">
								Tokenomics
							</h2>

							<div className="space-y-2">
								<div className="p-6 rounded-[4px] bg-[#FFFBE6] space-y-2">
									<div></div>
								</div>
								<div></div>
								<div></div>
								<div></div>
							</div>

							{/* <p className="text-[18px] font-normal md:text-[20px]">
								BoomSquad (BOOM) is a community-driven token on Stellar Soroban
								designed to reward participation, enhance engagement, and secure
								long-term sustainability.
							</p>

							<p className="text-[18px] font-normal md:text-[20px]">
								Unlike traditional tokens, BOOM integrates real-time DEX
								pricing, auto-liquidity, burn-to-earn incentives, and community
								voting. The result is a token economy where value grows with the
								community and trust is locked in liquidity forever.
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;
