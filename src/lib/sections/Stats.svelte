<script lang="ts">
	import lesson from '$lib/assets/lesson.webp';
</script>

<section id="stats" class="w-full py-16">
	<div class="mx-auto max-w-300 px-6">
		<!-- Desktop grid layout -->
		<div
			class="hidden gap-3 md:grid"
			style="grid-template-columns: 1fr 0.72fr 0.8fr; grid-template-rows: auto auto;"
		>
			<!-- 500+ graduates - blue gradient, spans left column top -->
			<div
				class="flex min-h-74 flex-col justify-between overflow-hidden rounded-4xl p-6 font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
				style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%); grid-column: 1; grid-row: 1;"
			>
				<p class="text-[120px] leading-none tracking-tight">500+</p>
				<p class="text-[20px] leading-[1.3]">
					Випускників з чудовими результатами та позитивними відгуками
				</p>
			</div>

			<!-- 5 years - white card -->
			<div
				class="flex min-h-[296px] flex-col justify-between overflow-hidden rounded-4xl bg-white p-6 font-medium shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
				style="grid-column: 2; grid-row: 1;"
			>
				<p class="text-[120px] leading-none tracking-tight text-primary">5</p>
				<p class="text-[20px] leading-[1.3]">
					<span class="text-primary">Років досвіду</span>
					<span class="text-text"> — середній досвід викладання у викладачів</span>
				</p>
			</div>

			<!-- 4 companies - dark blue, spans 2 rows -->
			<div
				class="relative flex flex-col justify-between overflow-hidden rounded-4xl bg-primary-dark p-6 font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
				style="grid-column: 3; grid-row: 1 / 3;"
			>
				<div class="absolute inset-0 overflow-hidden">
					<img
						src={lesson}
						alt="Урок"
						class="absolute top-[-5%] left-[-15%] w-[130%] max-w-none object-cover"
					/>
					<div class="absolute inset-0"></div>
				</div>
				<p class="relative z-10 text-[120px] leading-none tracking-tight">4</p>
				<p class="relative z-10 text-[20px] leading-[1.3]">
					Компанії довірили нам навчання своїх команд
				</p>
			</div>

			<!-- 10+ teachers - white wide card, spans 2 columns bottom -->
			<div
				class="flex min-h-[147px] items-center gap-7 overflow-hidden rounded-4xl bg-white px-6 py-8 font-medium shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
				style="grid-column: 1 / 3; grid-row: 2;"
			>
				<p class="shrink-0 text-[120px] leading-none tracking-[2px] text-primary">10+</p>
				<p class="text-[20px] leading-[1.3] text-text">
					<span class="text-primary">Відповідальних та досвідчених викладачів</span><br /> що провели
					тисячі уроків
				</p>
			</div>
		</div>

		<!-- Mobile layout (stacked) -->
		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
			<div class="flex gap-2">
				<div
					class="flex min-h-50 flex-col justify-between overflow-hidden rounded-4xl p-6 font-medium text-white"
					style="background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%)"
				>
					<p class="text-7xl leading-none font-medium">500+</p>
					<p class="mt-4 text-lg leading-[1.3]">
						Випускників з чудовими результатами та позитивними відгуками
					</p>
				</div>
				<div class="flex min-h-50 flex-col justify-between rounded-4xl bg-white p-6 shadow">
					<p class="text-7xl leading-none font-medium text-primary">5</p>
					<p class="mt-4 text-lg leading-[1.3] text-text">
						<span class="text-primary">Років досвіду</span> - середній досвіду викладання у викладачів
					</p>
				</div>
			</div>
			<div class="col-span-full flex items-center gap-4 rounded-4xl bg-white p-6 shadow">
				<p class="shrink-0 text-7xl leading-none font-medium text-primary">10+</p>
				<p class="text-lg leading-[1.3]">
					<span class="text-primary">Відповідальних та досвідчених викладачів</span>, що провели
					тисячі уроків
				</p>
			</div>
			<div
				class="relative col-span-full flex min-h-61 flex-col justify-between rounded-4xl p-6 text-white"
			>
				<div class="absolute inset-0 overflow-hidden rounded-4xl">
					<img
						src={lesson}
						alt="Урок"
						class="absolute z-[-1] max-h-61 w-[130%] max-w-none object-cover"
					/>
					<div class="absolute inset-0"></div>
				</div>
				<p class="text-7xl leading-none font-medium">4</p>
				<p class="mt-4 text-lg leading-[1.3]">Компанії довірили нам навчання своїх команд</p>
			</div>
		</div>
	</div>
</section>
