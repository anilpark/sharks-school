<script lang="ts">
	const igIcon = '/assets/9bb335fc3279540cdee8f6a312d49ba3b0d3417c.svg';

	// Review screenshots from Figma
	const reviewImages = [
		{
			src: '/assets/b274e592b311c4997df0b6ebf8a65dcae1c459e9.webp',
			alt: 'Відгук учня 1',
			wide: false
		},
		{
			src: '/assets/bc25df1fe7dee2aaabfa1d5f96a8bc9f08765c81.webp',
			alt: 'Відгук учня 2',
			wide: false
		},
		{
			src: '/assets/17638076408f19b9bcb1a60ea9dc4f10c7cec20c.webp',
			alt: 'Відгук учня 3',
			wide: true
		},
		{
			src: '/assets/d0c19a89a865ab91dd021f1586545372e68caab6.webp',
			alt: 'Відгук учня 4',
			wide: true
		},
		{
			src: '/assets/70c01883f5e5da8f76778a488731fcb8dce1abe3.webp',
			alt: 'Відгук учня 5',
			wide: false
		}
	];
</script>

<section id="reviews" class="w-full py-20" style="background: linear-gradient(to bottom, white 0%, #1f6fff 30%, #0450fb 70%, white 100%)">
	<!-- Header -->
	<div class="flex flex-col items-center gap-3 mb-12 px-4">
		<h2 class="section-title text-white text-center">Відгуки наших учнів</h2>
		<p class="text-[18px] text-white/80 text-center max-w-[706px] leading-[1.3]">
			Останні відгуки людей, які навчаються з нами та досягають своїх мовних цілей
		</p>
	</div>

	<!-- Review images grid -->
	<div class="max-w-[1280px] mx-auto px-6">
		<div class="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
			{#each reviewImages as review}
				<div class="break-inside-avoid rounded-[20px] overflow-hidden shadow-[0_8px_24px_0_rgba(0,0,0,0.15)]">
					<img src={review.src} alt={review.alt} class="w-full h-auto block" />
				</div>
			{/each}
		</div>
	</div>

	<!-- CTA button -->
	<div class="flex justify-center mt-12">
		<a
			href="https://instagram.com"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-3 h-[73px] px-10 rounded-[24px] text-white font-medium text-[28px] transition-opacity hover:opacity-90"
			style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px)"
		>
			<img src={igIcon} alt="Instagram" class="w-8 h-8" />
			Більше відгуків
		</a>
	</div>
</section>
