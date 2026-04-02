<script lang="ts">
	import lesson from '$lib/assets/lesson.webp';
</script>

<section id="stats" class="w-full py-16">
	<div class="max-w-300 mx-auto px-6">
		<!-- Desktop grid layout -->
		<div class="hidden md:grid gap-3" style="grid-template-columns: 1fr 0.72fr 0.8fr; grid-template-rows: auto auto;">
			<!-- 500+ graduates - blue gradient, spans left column top -->
			<div
				class="rounded-4xl shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between overflow-hidden text-white font-medium min-h-74"
				style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%); grid-column: 1; grid-row: 1;"
			>
				<p class="text-[120px] leading-none text-center tracking-tight">500+</p>
				<p class="text-[20px] leading-[1.3]">
					Випускників з чудовими результатами та позитивними відгуками
				</p>
			</div>

			<!-- 5 years - white card -->
			<div
				class="bg-white rounded-4xl shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between overflow-hidden font-medium min-h-[296px]"
				style="grid-column: 2; grid-row: 1;"
			>
				<p class="text-[120px] leading-none text-center tracking-tight text-primary">5</p>
				<p class="text-[20px] leading-[1.3]">
					<span class="text-primary">Років досвіду</span>
					<span class="text-text"> — середній досвід викладання у викладачів</span>
				</p>
			</div>

			<!-- 4 companies - dark blue, spans 2 rows -->
			<div
				class="rounded-4xl shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between overflow-hidden text-white font-medium bg-primary-dark relative"
				style="grid-column: 3; grid-row: 1 / 3;"
			>
				<div class="absolute inset-0 overflow-hidden">
					<img
						src={lesson}
						alt=""
						class="absolute w-[130%] max-w-none object-cover top-[-5%] left-[-15%] opacity-40"
					/>
					<div
						class="absolute inset-0"
						style="background: linear-gradient(to bottom, rgba(0,0,0,0.2) 7%, rgba(0,0,0,0.35) 69%, rgba(0,0,0,0.7) 94%)"
					></div>
				</div>
				<p class="text-[120px] leading-none text-center tracking-tight relative z-10">4</p>
				<p class="text-[20px] leading-[1.3] relative z-10">
					Компанії довірили нам навчання своїх команд
				</p>
			</div>

			<!-- 10+ teachers - white wide card, spans 2 columns bottom -->
			<div
				class="bg-white rounded-4xl shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] px-6 py-8 flex items-center gap-7 overflow-hidden font-medium min-h-[147px]"
				style="grid-column: 1 / 3; grid-row: 2;"
			>
				<p class="text-[120px] leading-none text-primary text-center tracking-[-14px] shrink-0">
					10+
				</p>
				<p class="text-[20px] leading-[1.3] text-text">
					<span class="text-primary">Відповідальних та досвідчених викладачів</span>, що провели
					тисячі уроків
				</p>
			</div>
		</div>

		<!-- Mobile layout (stacked) -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
			<div
				class="rounded-4xl p-6 flex flex-col justify-between overflow-hidden text-white font-medium min-h-50"
				style="background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%)"
			>
				<p class="text-7xl leading-none text-center font-medium">500+</p>
				<p class="text-lg leading-[1.3] mt-4">Випускників з чудовими результатами</p>
			</div>
			<div class="bg-white rounded-4xl p-6 flex flex-col justify-between min-h-50 shadow">
				<p class="text-7xl leading-none text-center text-primary font-medium">5</p>
				<p class="text-lg leading-[1.3] mt-4 text-text"><span class="text-primary">Років досвіду</span> у викладачів</p>
			</div>
			<div class="bg-white rounded-4xl p-6 flex items-center gap-4 shadow col-span-full">
				<p class="text-7xl leading-none text-primary font-medium shrink-0">10+</p>
				<p class="text-lg leading-[1.3]"><span class="text-primary">Відповідальних викладачів</span>, що провели тисячі уроків</p>
			</div>
			<div class="bg-primary-dark rounded-4xl p-6 flex flex-col justify-between min-h-50 text-white col-span-full">
				<p class="text-7xl leading-none text-center font-medium">4</p>
				<p class="text-lg leading-[1.3] mt-4">Компанії довірили нам навчання своїх команд</p>
			</div>
		</div>
	</div>
</section>
