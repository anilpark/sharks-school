<script lang="ts">
	import instagramIcon from '$lib/assets/instagram.svg';
	import review1 from '$lib/assets/review1.webp';
	import review2 from '$lib/assets/review2.webp';
	import review3 from '$lib/assets/review3.webp';

	const alt = 'Відгук учня';
	const reviewImages = [
		{
			src: review1
		},
		{
			src: review2
		},
		{
			src: review3
		},
		{
			src: review1
		},
		{
			src: review2
		},
		{
			src: review3
		},
		{
			src: review1
		},
		{
			src: review2
		},
		{
			src: review3
		}
	];
</script>

<section id="reviews" class="w-full py-80">
	<!-- Header -->
	<div class="mb-12 flex flex-col items-center gap-3 px-4">
		<h2 class="section-title text-center text-white">Відгуки наших учнів</h2>
		<p class="max-w-[706px] text-center text-[18px] leading-[1.3] text-white/80">
			Останні відгуки людей, які навчаються з нами та досягають своїх мовних цілей
		</p>
	</div>

	<!-- Review images grid -->
	<div class="mx-auto max-w-[1280px] px-6">
		<div class="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">
			{#each reviewImages as review, i (i)}
				<div class="w-full break-inside-avoid overflow-hidden rounded-[24px] bg-white p-2">
					<img src={review.src} {alt} class="block h-auto w-full" />
				</div>
			{/each}
		</div>
	</div>

	<!-- CTA button -->
	<div class="mt-12 flex justify-center">
		<a
			href="https://instagram.com"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-[73px] items-center gap-3 rounded-[24px] px-10 text-[22px] font-medium text-white transition-opacity hover:opacity-90"
			style="background: rgba(255,255,255,0.15); border-top: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px)"
		>
			<img src={instagramIcon} alt="Instagram" class="h-8 w-8" />
			Більше відгуків
		</a>
	</div>
</section>
