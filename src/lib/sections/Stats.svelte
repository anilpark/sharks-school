<script lang="ts">
	import lesson from '$lib/assets/lesson.webp';
</script>

<section id="stats" class="w-full section-pad">
	<div class="mx-auto max-w-300 px-6 max-[380px]:px-4">
		<!-- Desktop grid layout -->
		<div
			class="hidden gap-3 lg:grid"
			style="grid-template-columns: 1fr 0.72fr 0.8fr; grid-template-rows: auto auto;"
		>
			<!-- 500+ graduates  -->
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
        <p class="text-[14px] sm:text-[20px] leading-[1.3]">
					<span class="text-primary">Років досвіду</span>
					<span class="text-text"> — середній досвід викладання у викладачів</span>
				</p>
			</div>

			<!-- 4 companies  -->
			<div
				class="relative flex flex-col justify-between overflow-hidden rounded-4xl bg-primary-dark p-6 font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
				style="grid-column: 3; grid-row: 1 / 3;"
			>
				<div class="absolute inset-0 overflow-hidden">
					<img
						src={lesson}
						alt="Урок"
						class="absolute top-[-5%] left-[-15%] w-[130%] max-w-none object-cover"
						loading="lazy"
						decoding="async"
					/>
					<div class="absolute inset-0"></div>
				</div>
				<p class="relative z-10 text-[120px] leading-none tracking-tight">4</p>
				<p class="relative z-10 text-[20px] leading-[1.3]">
					Компанії довірили нам навчання своїх команд
				</p>
			</div>

			<!-- 10+ teachers -->
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

		<!-- Mobile  -->
		<div class="grid grid-cols-1 gap-3 lg:hidden">
			<div class="grid grid-cols-2 gap-2">
				<div
					class="flex min-h-50 min-w-0 flex-col justify-between overflow-hidden rounded-4xl p-6 max-[380px]:p-4 font-medium text-white"
					style="background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%)"
				>
					<p class="text-[clamp(42px,12vw,72px)] leading-none font-medium tracking-[-0.02em]">500+</p>
					<p class="mt-4 text-lg leading-[1.3] max-[380px]:mt-3 max-[380px]:text-[15px]">
						Випускників з чудовими результатами та позитивними відгуками
					</p>
				</div>
				<div class="flex min-h-50 min-w-0 flex-col justify-between rounded-4xl bg-white p-6 shadow max-[380px]:p-4">
					<p class="text-[clamp(42px,12vw,72px)] leading-none font-medium tracking-[-0.02em] text-primary">5</p>
					<p class="mt-4 text-lg leading-[1.3] text-text max-[380px]:mt-3 max-[380px]:text-[14px]">
						<span class="text-primary">Років досвіду</span> - середній досвіду викладання у викладачів
					</p>
				</div>
			</div>
			<div class="col-span-full flex items-center gap-4 rounded-4xl bg-white p-6 shadow max-[380px]:gap-3 max-[380px]:p-4">
				<p class="shrink-0 text-[clamp(42px,12vw,72px)] leading-none font-medium tracking-[-0.02em] text-primary">10+</p>
				<p class="text-lg leading-[1.3] max-[380px]:text-[14px]">
					<span class="text-primary">Відповідальних та досвідчених викладачів</span>, що провели
					тисячі уроків
				</p>
			</div>
			<div
				class="relative col-span-full flex min-h-61 flex-col justify-between rounded-4xl p-6 text-white max-[380px]:p-4"
			>
				<div class="absolute inset-0 overflow-hidden rounded-4xl">
					<img
						src={lesson}
						alt="Урок"
						class="absolute inset-0 h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent"></div>
				</div>
				<p class="relative z-10 text-[clamp(42px,12vw,72px)] leading-none font-medium tracking-[-0.02em]">4</p>
				<p class="relative z-10 mt-4 text-lg leading-[1.3] max-[380px]:text-[14px]">Компанії довірили нам навчання своїх команд</p>
			</div>
		</div>
	</div>
</section>
