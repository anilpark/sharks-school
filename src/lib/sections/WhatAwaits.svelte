<script lang="ts">
	import orangePin from '$lib/assets/orange-pin.webp';
	import bluePin from '$lib/assets/blue-pin.webp';
	import purplePin from '$lib/assets/purple-pin.webp';

	const cards = [
		{
			number: '01',
			title: 'Тепла атмосфера',
			desc: 'комʼюніті викладачів та учнів, де підтримують і мотивують',
			bg: '#fff3eb',
			titleColor: '#573012',
			descColor: '#573012',
			numColor: '#c29369',
			img: orangePin,
			rotate: 'rotate-[5deg]',
			top: '15px',
			left: 'calc(15% + 10px)'
		},
		{
			number: '02',
			title: 'Живі уроки',
			desc: 'за комунікативною методикою - говоримо з першого заняття',
			bg: '#dee6fd',
			titleColor: '#191360',
			descColor: '#191360',
			numColor: '#5677d5',
			img: bluePin,
			rotate: 'rotate-[-5deg]',
			top: '147px',
			left: 'calc(58% + 10px)'
		},
		{
			number: '03',
			title: 'Сучасні інструменти',
			desc: 'Miro, Quizlet, інтерактивні вправи, квест карти, міні ігри',
			bg: '#f3e5fe',
			titleColor: '#4c1360',
			descColor: '#4c1360',
			numColor: '#a673d0',
			img: purplePin,
			rotate: 'rotate-[5deg]',
			top: '606px',
			left: 'calc(15% + 40px)'
		},
		{
			number: '04',
			title: 'Соц. активності',
			desc: 'Книжкові та розмовні клуби - більше практики й спілкування',
			bg: '#fff3eb',
			titleColor: '#573012',
			descColor: '#573012',
			numColor: '#c29369',
			img: orangePin,
			rotate: 'rotate-[-5deg]',
			top: '770px',
			left: 'calc(56% + 10px)'
		}
	];
</script>

<section id="what-awaits" class="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20">
	<!-- Header -->
	<div class="mb-10 flex flex-col items-center gap-3 px-6 sm:mb-14 sm:gap-4 lg:mb-20">
		<div class="relative">
			<h2 class="section-title text-gradient-dark text-center">Що на вас чекає</h2>

			<!-- Mobile ?? -->
			<span
				class="absolute top-0 right-[-30px] font-caveat text-[43.36px] leading-none tracking-[-0.04em] text-[#5677D5] sm:top-[-14px] sm:right-[-26px] lg:hidden"
				style="font-family: 'Caveat', cursive; transform: rotate(-5deg);"
			>
				??
			</span>

			<!-- Desktop ?? -->
			<span
				class="absolute hidden font-caveat text-[90px] leading-none text-[#0450fb] lg:block"
				style="font-family: 'Caveat', cursive; top: -28px; right: -70px; transform: rotate(-5deg)"
			>
				??
			</span>
		</div>

		<p class="section-subtitle max-w-[781px] text-center">
			Цікаві уроки, спілкування, практичні завдання й тепла атмосфера
		</p>
	</div>

	<!-- Desktop  -->
	<div class="paper-pattern relative mx-auto hidden h-[1300px] max-w-[1400px] lg:block">
		{#each cards as card, index (index)}
			<div class="absolute {card.rotate}" style="top: {card.top}; left: {card.left}; width: 408px;">
				<div
					class="relative flex flex-col gap-4 rounded-[56px] bg-white px-[21px] pt-[85px] pb-[21px] shadow-[0_37px_46px_0_rgba(45,6,6,0.1)]"
				>
					<div
						class="absolute -top-7 left-1/2 h-[108px] w-[105px] -translate-x-1/2 overflow-visible"
					>
						<img src={card.img} alt="" loading="lazy" decoding="async" />
					</div>

					<div
						class="flex min-h-[294px] flex-col gap-4 rounded-[37px] p-6"
						style="background-color: {card.bg}"
					>
						<p
							class="font-caveat text-[73px] leading-none"
							style="font-family: 'Caveat', cursive; color: {card.numColor};"
						>
							{card.number}
						</p>
						<h3 class="text-[32px] leading-normal font-medium" style="color: {card.titleColor}">
							{card.title}
						</h3>
						<p
							class="text-[22px] leading-normal font-medium opacity-70"
							style="color: {card.descColor}"
						>
							{card.desc}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Mobile cards -->
	<div
		class="mobile-paper-pattern mx-auto flex max-w-[320px] flex-col items-center gap-12.5 px-6 sm:max-w-[560px] sm:gap-7 md:hidden"
	>
		{#each cards as card, index (index)}
			<div class={`w-full max-w-[253px] ${index % 2 === 0 ? 'rotate-[5deg]' : 'rotate-[-5deg]'}`}>
				<div
					class="relative flex min-h-[248.04px] flex-col gap-[9.55px] rounded-[34.73px] bg-white px-[13.23px] pt-[52.92px] pb-[13.23px] shadow-[0_24px_32px_0_rgba(45,6,6,0.10)]"
				>
					<div class="absolute -top-5 left-1/2 h-[78px] w-[76px] -translate-x-1/2 overflow-visible">
						<img src={card.img} alt="" class="h-full w-full object-contain" loading="lazy" decoding="async" />
					</div>

					<div
						class="flex min-h-[168px] flex-col gap-2 rounded-[24px] px-4 py-4"
						style="background-color: {card.bg}"
					>
						<p
							class="font-caveat text-[46px] leading-none tracking-[-0.04em]"
							style="font-family: 'Caveat', cursive; color: {card.numColor};"
						>
							{card.number}
						</p>

						<h3 class="text-[22px] leading-[1.05] font-medium" style="color: {card.titleColor}">
							{card.title}
						</h3>

						<p
							class="text-[16px] leading-[1.2] font-medium opacity-70"
							style="color: {card.descColor}"
						>
							{card.desc}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Small tablet -->
	<div class="mx-auto hidden max-w-[760px] grid-cols-2 gap-6 px-6 md:grid lg:hidden">
		{#each cards as card, index (index)}
			<div class={`${index % 2 === 0 ? 'rotate-[5deg]' : 'rotate-[-5deg]'}`}>
				<div
					class="relative flex min-h-[280px] flex-col gap-3 rounded-[36px] bg-white px-4 pt-[58px] pb-4 shadow-[0_28px_36px_0_rgba(45,6,6,0.10)]"
				>
					<div class="absolute -top-5 left-1/2 h-[84px] w-[82px] -translate-x-1/2 overflow-visible">
						<img src={card.img} alt="" class="h-full w-full object-contain" loading="lazy" decoding="async" />
					</div>

					<div
						class="flex min-h-[190px] flex-col gap-3 rounded-[26px] p-5"
						style="background-color: {card.bg}"
					>
						<p
							class="font-caveat text-[54px] leading-none tracking-[-0.04em]"
							style="font-family: 'Caveat', cursive; color: {card.numColor};"
						>
							{card.number}
						</p>

						<h3 class="text-[24px] leading-[1.1] font-medium" style="color: {card.titleColor}">
							{card.title}
						</h3>

						<p
							class="text-[17px] leading-[1.25] font-medium opacity-70"
							style="color: {card.descColor}"
						>
							{card.desc}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
