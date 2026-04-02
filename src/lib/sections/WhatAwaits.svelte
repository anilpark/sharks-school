<script lang="ts">
	const img01 = '/assets/ba17419e76a4ba00202437c6617dfd9e38fe2acf.webp';
	const img02 = '/assets/9ca58b304a7aadffadef9e8704f61089924758dd.webp';
	const img03 = '/assets/1a88e508f8569b63c11f70e50bca5f8aa1ab21c4.webp';

	const cards = [
		{
			number: '01',
			title: 'Тепла атмосфера',
			desc: "комʼюніті викладачів та учнів, де підтримують і мотивують",
			bg: '#fff3eb',
			titleColor: '#573012',
			descColor: '#573012',
			numColor: '#c29369',
			img: img01,
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
			img: img02,
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
			img: img03,
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
			img: img01,
			rotate: 'rotate-[-5deg]',
			top: '770px',
			left: 'calc(56% + 10px)'
		}
	];
</script>

<section id="what-awaits" class="w-full py-20 relative overflow-hidden">
	<!-- Header -->
	<div class="flex flex-col items-center gap-4 mb-20 px-4">
		<div class="relative">
			<h2 class="section-title text-gradient-dark text-center">Що на вас чекає</h2>
			<span
				class="absolute font-caveat text-[#0450fb] text-[90px] leading-none"
				style="font-family: 'Caveat', cursive; top: -20px; right: -60px; transform: rotate(-5deg)"
			>
				??
			</span>
		</div>
		<p class="section-subtitle text-center max-w-[781px]">
			Цікаві уроки, спілкування, практичні завдання й тепла атмосфера
		</p>
	</div>

	<!-- Cards grid - desktop staggered layout -->
	<div class="hidden lg:block relative h-[1300px] max-w-[1400px] mx-auto">
		{#each cards as card}
			<div
				class="absolute {card.rotate}"
				style="top: {card.top}; left: {card.left}; width: 408px;"
			>
				<div
					class="relative rounded-[56px] shadow-[0_37px_46px_0_rgba(45,6,6,0.1)] pt-[85px] px-[21px] pb-[21px] flex flex-col gap-4 bg-white"
				>
					<!-- Sticker on top -->
					<div
						class="absolute -top-7 left-1/2 -translate-x-1/2 w-[105px] h-[108px] overflow-visible"
					>
						<span
							class="absolute font-caveat text-[73px] leading-none"
							style="font-family: 'Caveat', cursive; color: {card.numColor}; top: -18px; left: 50%; transform: translateX(-50%)"
						>
							{card.number}
						</span>
					</div>

					<!-- Card body -->
					<div
						class="rounded-[37px] p-6 flex flex-col gap-4 min-h-[294px]"
						style="background-color: {card.bg}"
					>
						<h3 class="text-[32px] font-medium leading-normal" style="color: {card.titleColor}">
							{card.title}
						</h3>
						<p
							class="text-[22px] font-medium leading-normal opacity-70"
							style="color: {card.descColor}"
						>
							{card.desc}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Mobile cards (stacked) -->
	<div class="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto px-4">
		{#each cards as card}
			<div class="rounded-[40px] shadow-[0_37px_46px_0_rgba(45,6,6,0.1)] pt-16 px-5 pb-5 bg-white relative">
				<div
					class="rounded-[30px] p-5 flex flex-col gap-3"
					style="background-color: {card.bg}"
				>
					<span
						class="font-caveat text-[48px] leading-none mb-1"
						style="font-family: 'Caveat', cursive; color: {card.numColor}"
					>
						{card.number}
					</span>
					<h3 class="text-[24px] font-medium leading-normal" style="color: {card.titleColor}">
						{card.title}
					</h3>
					<p class="text-[18px] font-medium leading-normal opacity-70" style="color: {card.descColor}">
						{card.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
