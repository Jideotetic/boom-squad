import Hero from "@/components/Hero";

function HomePage() {
	return (
		<>
			<Hero />

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
				<div className="mx-auto w-full max-w-[1200px] px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10 border">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			{/* 

			<Metrics />

			<About />

			<ExploreTask />

			<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 bg-white px-5 py-10 pb-10 md:py-[104px] lg:flex-row lg:gap-20 lg:px-10">
				<div className="flex flex-col gap-6 lg:order-2 lg:max-w-[576px]">
					<div className="lg-text-[24px] w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] font-light text-[#1082E4] lg:px-8 lg:py-3">
						Create, Work & Earn
					</div>

					<div className="space-y-8 text-[#050215]">
						<h2 className="text-[30px] font-extrabold md:text-[40px]">
							Build, Contribute and Get Rewarded
						</h2>

						<p className="text-[18px] font-light md:text-[20px]">
							Discover communities, take on meaningful quests, and track your
							growth with AI-powered insights and Git-based contribution
							tracking and earn while at it. Contribute.fi helps your
							collaborate with other brilliant minds without friction.
						</p>
					</div>

					<AuthButtons />
				</div>

				<img
					className="mx-auto h-auto w-full bg-radial from-blue-100 from-40% to-white sm:w-1/2 lg:order-1 lg:w-full"
					src="/Blue Harmony and Balance 1.svg"
					alt=""
				/>
			</div>

			<FeaturedCommunities />

			<Testimonial /> */}
		</>
	);
}

export default HomePage;
