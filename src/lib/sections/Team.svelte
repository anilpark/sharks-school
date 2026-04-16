<script lang="ts">
	import quoteIcon from '$lib/assets/quote.svg';
	import circleTeacher1 from '$lib/assets/teachers/circle-teacher-1.webp';
	import circleTeacher2 from '$lib/assets/teachers/circle-teacher-2.webp';
	import circleTeacher3 from '$lib/assets/teachers/circle-teacher-3.webp';
	import teacher1 from '$lib/assets/teachers/teacher-1.webp';
	import teacher2 from '$lib/assets/teachers/teacher-2.webp';
	import teacher3 from '$lib/assets/teachers/teacher-3.webp';
	import teacher4 from '$lib/assets/teachers/teacher-4.webp';
	import teacher5 from '$lib/assets/teachers/teacher-5.webp';
	import teacher6 from '$lib/assets/teachers/teacher-6.webp';
	import teacher7 from '$lib/assets/teachers/teacher-7.webp';
	import teacher8 from '$lib/assets/teachers/teacher-8.webp';
	import teacher9 from '$lib/assets/teachers/teacher-9.webp';
	import teacher10 from '$lib/assets/teachers/teacher-10.webp';
	import { teachersContent } from '$lib/content/team';
	import { onMount, tick } from 'svelte';

	const smallPhotos = [circleTeacher1, circleTeacher2, circleTeacher3];
	const teacherPhotos = [
		teacher3,
		teacher4,
		teacher5,
		teacher10,
		teacher1,
		teacher2,
		teacher6,
		teacher7,
		teacher8,
		teacher9
	];

	const teachers = teachersContent.map((teacher, index) => ({
		...teacher,
		photo: teacherPhotos[index] ?? teacher1
	}));

	let slider: HTMLDivElement | null = null;

	onMount(async () => {
		await tick();
		if (!slider) return;

		slider.scrollTo({
			left: (slider.scrollWidth - slider.clientWidth) / 2,
			behavior: 'auto'
		});
	});
</script>

<section id="team" class="w-full py-14 sm:py-20 lg:py-24 bg-[#f5f5f5]">
	<div class="mb-10 w-full px-6 text-center sm:mb-14">
	<div class="mx-auto flex w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] flex-nowrap items-center justify-center gap-3 max-[430px]:flex-wrap max-[430px]:gap-2 md:gap-5">
		<h2 class="whitespace-nowrap text-[36px] font-bold leading-none text-gray-900 max-[430px]:whitespace-normal max-[430px]:text-[clamp(28px,10vw,34px)] sm:text-[48px] md:text-[56px]">
			Наша
		</h2>

		<div class="flex shrink-0 -space-x-3 max-[380px]:-space-x-2 md:-space-x-5" aria-hidden="true">
			{#each smallPhotos as photo, i (i)}
				<div 
					class="h-10 w-10 rounded-full border-2 border-[#f5f5f5] bg-gray-200 shadow-sm max-[380px]:h-9 max-[380px]:w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden" 
					style={`z-index:${10 - i}`}
				>
					<img src={photo} alt="" class="h-full w-full object-cover" decoding="async" />
				</div>
			{/each}
		</div>

		<h2 class="whitespace-nowrap text-[36px] font-bold leading-none text-gray-900 max-[430px]:whitespace-normal max-[430px]:text-[clamp(28px,10vw,34px)] sm:text-[48px] md:text-[56px]">
			команда
		</h2>
	</div>

	<p class="mx-auto mt-6 max-w-[781px] text-[16px] leading-relaxed text-gray-600 sm:text-[18px]">
		Професіонали, які допоможуть полюбити мову та досягти мети
	</p>
</div>

	<div class="slider-shell">
		<div class="teacher-slider scrollbar-hide pb-8 pt-4" bind:this={slider}>
			<div class="teacher-track">
				{#each teachers as teacher, index (index + 100)}
					<div class="teacher-card relative flex shrink-0 flex-col h-full pb-8">
						
						<div class="relative h-[320px] w-full shrink-0 overflow-hidden rounded-[24px] sm:h-[360px]">
							<img
								src={teacher.photo}
								alt={teacher.name}
								class="absolute inset-0 h-full w-full object-cover object-top"
								loading="lazy"
								decoding="async"
							/>

							<div class="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent"></div>

							<div class="absolute right-4 top-4 flex items-baseline gap-1.5 rounded-full bg-white/95 px-4 py-2 text-[#0047FF] shadow-[0_2px_12px_rgba(0,0,0,0.08)] backdrop-blur-md">
								<span class="text-[15px] font-bold tracking-tight">{teacher.lessons}</span>
								<span class="text-[13px] font-medium">Уроків проведено</span>
							</div>
						</div>

						<div class="relative z-10 flex flex-1 flex-col px-4 pt-2 sm:px-6">
							<div class="flex flex-col gap-2">
								<h3 class="text-center text-[36px] font-medium text-[#1A1A1A] sm:text-[40px]">
									{teacher.name}
								</h3>
								
								<p class="mx-auto min-h-[72px] sm:min-h-[84px] w-full max-w-[320px] text-center text-[15px] leading-[1.4] text-[#666666]">
									{teacher.role}
								</p>
							</div>

							<div class="relative mt-5 rounded-[20px] bg-[#EAF0FF] p-5 sm:p-6 pb-6">
								<p class="text-left text-[14px] leading-relaxed font-medium text-[#0047FF]">
									{teacher.quote}
								</p>
								
								<div class="absolute -bottom-6 right-5 h-[48px] w-[48px]">
									<img src={quoteIcon} alt="quote" class="h-full w-full" loading="lazy" decoding="async" />
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="slider-edge slider-edge--left" aria-hidden="true"></div>
		<div class="slider-edge slider-edge--right" aria-hidden="true"></div>
	</div>
</section>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.slider-shell {
		position: relative;
		--edge-blur-width: clamp(32px, 20vw, 170px);
		--edge-gap: 16px;
		--edge-safe-space: calc(var(--edge-blur-width) + var(--edge-gap));
	}

	.teacher-slider {
		overflow-x: auto;
		overflow-y: visible; 
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		scroll-padding-inline: var(--edge-safe-space);
		padding-inline: var(--edge-safe-space);
		overscroll-behavior-x: contain;
		display: flex;
	}

	.teacher-track {
		display: flex;
		gap: 24px;
		width: max-content;
		padding-bottom: 32px; 
		align-items: stretch;
	}

	.teacher-card {
		width: min(380px, calc(100vw - 32px));
		scroll-snap-align: center;
		scroll-snap-stop: always;
	}

	.slider-edge {
		position: absolute;
		top: 0;
		bottom: 0;
		width: var(--edge-safe-space);
		pointer-events: none;
		z-index: 20;
	}

	.slider-edge--left {
		left: 0;
		background: linear-gradient(90deg, #f5f5f5 20%, rgba(245,245,245,0) 100%);
	}

	.slider-edge--right {
		right: 0;
		background: linear-gradient(270deg, #f5f5f5 20%, rgba(245,245,245,0) 100%);
	}

	@media (max-width: 768px) {
		.slider-shell {
			--edge-blur-width: 12px;
			--edge-gap: 12px;
			--edge-safe-space: 24px;
		}

		.teacher-slider {
			scroll-padding-inline: 24px;
		}

		.teacher-card {
			width: min(340px, calc(100vw - 48px));
		}
	}
</style>