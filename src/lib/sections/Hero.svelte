<script lang="ts">
import mortarboard from "$lib/assets/mortarboard-icon.svg"
import binders from "$lib/assets/binders.webp"
import bindersBox from "$lib/assets/binders-box.webp"
import arrowRightIcon from "$lib/assets/arrow-right-icon.svg"
import notepad from "$lib/assets/notepad.webp"
import pens from "$lib/assets/pens.webp"
</script>

<section id="home" class="relative w-full pt-25 pb-20 min-h-175">
	<div class="absolute left-0 -top-25 w-101.5 h-197.25 pointer-events-none hidden xl:block">
		<img
			src={bindersBox}
			alt=""
			class="absolute"
		/>
		<img
			src={binders}
			alt=""
			class="absolute"
			style="left: 80px; top: 50%;   "
		/>
	</div>

	<!-- Right decorative image -->
	<div class="absolute right-0 top-3 w-[320px] h-197.25 pointer-events-none hidden xl:block">
		<img
			src={notepad}
			alt=""
			class="absolute rounded-2xl"
			style="right: 0px; top: 198px; width: 260px; height: 480px;"
		/>
	</div>

	<div class="absolute right-0 top-3 w-[320px] h-197.25 pointer-events-none hidden xl:block">
		<img
			src={pens}
			alt=""
			class="absolute rounded-2xl"
			style="right: 0px; top: 0px; width: 190px; height: 430px;  transform: translateY(-50%) "
		/>
	</div>

	<!-- Main content -->
	<div class="max-w-266.5 mx-auto flex flex-col items-center gap-10 px-4">
		<!-- Badge -->
		<div
			class="flex items-center gap-2.5 px-8 py-2.5 border border-[#525252] rounded-full shrink-0"
		>
			<img src={mortarboard} alt="" class="w-6 h-6" />
			<span class="font-medium text-[#525252] text-center" style="text-wrap: balance">Мовна школа для дорослих та підлітків</span>
		</div>

		<!-- Headline -->
		<div class="flex flex-col items-center text-center gap-0 w-full">
			<div
				class="flex flex-wrap items-start justify-center gap-6 text-[clamp(56px,8vw,96px)] leading-none tracking-[-3.84px] w-full"
			>
				<span class="text-gradient-dark font-medium">Робимо</span>
				<span
					class="font-playfair font-bold italic text-primary"
					style="font-family: 'Playfair Display', serif"
				>
					іноземну мову
				</span>
			</div>
			<p
				class="text-gradient-dark font-medium text-[clamp(56px,8vw,93px)] leading-none tracking-[-3.84px] w-full text-center"
			>
				частиною вашого життя
			</p>
		</div>

		<!-- Subheading -->
		<p class="font-medium text-text-gray text-[24px] leading-[1.3] text-center max-w-195.25">
			Забудьте про нудні тексти з підручників минулого століття, жодних шаблонних програм, лише
			ваші хобі, цілі та вподобання
		</p>

		<!-- CTAs -->
		<div class="flex items-center gap-2 mt-2">
			<a href="#contact" class="btn-blue rounded-[14px]"> Хочу на урок </a>
			<a
				href="#what-awaits"
				class="flex items-center gap-2.5 h-17 px-10 border border-text rounded-[14px] font-medium text-[18px] text-text hover:bg-gray-50 transition-colors"
			>
				Дізнатись більше
				<img src={arrowRightIcon} alt="" class="w-6 h-6" />
			</a>
		</div>
	</div>
</section>
