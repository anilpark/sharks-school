<script lang="ts">
	import mortarboard from '$lib/assets/mortarboard-icon.svg';
	import binders from '$lib/assets/binders.webp';
	import bindersBox from '$lib/assets/binders-box.webp';
	import arrowRightIcon from '$lib/assets/arrow-right-icon.svg';
	import notepad from '$lib/assets/notepad.webp';
	import pens from '$lib/assets/pens.webp';
</script>

<section
	id="home"
	class="relative w-full overflow-hidden bg-[#f4f4f4] pt-[86px] pb-[48px] sm:pt-[108px] sm:pb-[56px] lg:pt-[124px] lg:pb-[80px] xl:min-h-175"
>
	<!-- Mobile -->
	<div class="pointer-events-none absolute inset-0 xl:hidden">
		<img src={bindersBox} alt="" class="absolute top-[10px] left-[-34px] w-[112px] opacity-95" decoding="async" />

		<img
			src={pens}
			alt=""
			class="absolute top-[36px] right-[-8px] w-[126px] rotate-[6deg] opacity-95"
			decoding="async"
		/>

		<img
			src={notepad}
			alt=""
			class="absolute top-[178px] right-[-68px] w-[172px] rotate-[8deg] opacity-90"
			decoding="async"
		/>

		<img
			src={binders}
			alt=""
			class="absolute top-[352px] left-[-30px] w-[76px] -rotate-[20deg] opacity-95"
			decoding="async"
		/>

		<img
			src={binders}
			alt=""
			class="absolute bottom-[178px] left-[-38px] w-[72px] rotate-[20deg] opacity-95"
			decoding="async"
		/>

		<img
			src={binders}
			alt=""
			class="absolute bottom-[58px] left-[-44px] w-[68px] -rotate-[15deg] opacity-90"
			decoding="async"
		/>
	</div>

	<!-- Desktop  -->
	<div class="pointer-events-none absolute inset-0 hidden xl:block">
		<div class="absolute -top-25 left-0 h-197.25 w-101.5">
			<img src={bindersBox} alt="" class="absolute" decoding="async" />
			<img src={binders} alt="" class="absolute" style="left: 80px; top: 50%;" decoding="async" />
		</div>

		<div class="absolute top-3 right-0 h-197.25 w-[320px]">
			<img
				src={notepad}
				alt=""
				class="absolute rounded-2xl"
				style="right: 0px; top: 198px; width: 260px; height: 480px;"
				decoding="async"
			/>
		</div>

		<div class="absolute top-3 right-0 h-197.25 w-[320px]">
			<img
				src={pens}
				alt=""
				class="absolute rounded-2xl"
				style="right: 0px; top: 0px; width: 190px; height: 430px; transform: translateY(-50%)"
				decoding="async"
			/>
		</div>
	</div>

	<div class="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 lg:px-8">
		<!-- Badge (skip only on mobile) -->
		<div
			class="hidden max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#525252] px-4 py-2 sm:flex sm:px-6 sm:py-2.5 lg:px-8"
		>
			<img src={mortarboard} alt="" class="h-5 w-5 sm:h-6 sm:w-6" decoding="async" />
			<span
				class="text-center text-[13px] leading-[1.25] font-medium text-[#525252] sm:text-[15px] lg:text-base"
				style="text-wrap: balance"
			>
				Мовна школа для дорослих та підлітків
			</span>
		</div>

		<!-- Mobile title -->
		<div class="mt-6 w-full max-sm:mt-4 sm:mt-8 lg:hidden">
			<h1 class="mx-auto max-w-[430px] text-center">
				<span
					class="block text-left text-[clamp(38px,11vw,60px)] leading-[0.9] font-medium tracking-[-2.2px] text-[#2a2a2a]"
				>
					Робимо
				</span>

				<span
					class="mt-1 block text-left font-playfair text-[clamp(38px,11vw,60px)] leading-[0.86] font-bold tracking-[-1px] text-primary italic"
					style="font-family: 'Playfair Display', serif"
				>
					іноземну мову
				</span>

				<span
					class="mt-1 block text-[clamp(38px,11vw,60px)] leading-[0.9] font-medium tracking-[-2.2px] text-[#2a2a2a]"
				>
					частиною вашого
				</span>

				<span
					class="block pr-[12px] text-right text-[clamp(38px,11vw,60px)] leading-[0.9] font-medium tracking-[-2.2px] text-[#2a2a2a]"
				>
					життя
				</span>
			</h1>
		</div>

		<!-- Desktop title -->
		<div class="mt-10 hidden w-full flex-col items-center text-center lg:flex">
			<div
				class="flex w-full flex-wrap items-start justify-center gap-6 text-[clamp(56px,5vw,96px)] leading-none tracking-[-3.84px]"
			>
				<span class="font-medium text-[#2a2a2a]">Робимо</span>
				<span
					class="font-playfair font-bold text-primary italic"
					style="font-family: 'Playfair Display', serif"
				>
					іноземну мову
				</span>
			</div>

			<p
				class="w-full text-center text-[clamp(56px,5vw,93px)] leading-none font-medium tracking-[-3.84px] text-[#2a2a2a]"
			>
				частиною вашого життя
			</p>
		</div>

		<!-- Subtitle -->
		<p
			class="mt-8 max-w-[360px] text-center text-[15px] leading-[1.34] font-medium text-[#6f6f6f] sm:mt-9 sm:max-w-[560px] sm:text-[17px] lg:mt-10 lg:max-w-[781px] lg:text-[20px] lg:leading-[1.3]"
		>
			Забудьте про нудні тексти з підручників минулого століття, жодних шаблонних програм, лише ваші
			хобі, цілі та вподобання
		</p>

		<!-- Buttons -->
		<div
			class="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:max-w-[339px] lg:mt-12 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-2"
		>
			<a
				href="#contact"
				class="flex h-[59px] w-full items-center justify-center gap-[8.67px] rounded-[14px] border-t-[2.6px] border-white/40 px-[34.7px] pt-[13.01px] pb-[13.01px] text-center text-[16px] font-medium text-white shadow-[0_6px_18px_rgba(4,80,251,0.22)] transition-opacity hover:opacity-90 lg:h-[68px] lg:w-[264px] lg:gap-[10px] lg:border-t-[3px] lg:px-[40px] lg:pt-[15px] lg:pb-[15px] lg:text-[18px]"
				style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
			>
				Хочу на урок
			</a>

			<a
				href="#what-awaits"
				class="flex h-[57px] w-full items-center justify-center gap-[8.42px] rounded-[14px] border-[0.84px] border-text px-[33.69px] pt-[12.63px] pb-[12.63px] text-center text-[16px] font-medium text-text transition-colors hover:bg-black/[0.03] lg:h-[68px] lg:w-[271px] lg:gap-[10px] lg:border lg:px-[36px] lg:pt-[15px] lg:pb-[15px] lg:text-[18px]"
			>
				Дізнатись більше
				<img src={arrowRightIcon} alt="" class="h-5 w-5 shrink-0 lg:h-6 lg:w-6" decoding="async" />
			</a>
		</div>
	</div>
</section>
