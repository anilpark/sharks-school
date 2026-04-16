<script lang="ts">
	import instagramIcon from '$lib/assets/instagram.svg';
	import teacherPreview1 from '$lib/assets/teachers/teacher-1.webp';
	import teacherPreview2 from '$lib/assets/teachers/teacher-2.webp';
	import teacherPreview3 from '$lib/assets/teachers/teacher-3.webp';
	import teacherPreview4 from '$lib/assets/teachers/teacher-4.webp';
	import { reviewsInstagramUrl, textReviewsContent, videoCardsContent } from '$lib/content/reviews';

	const reviewPreviews = [teacherPreview1, teacherPreview2, teacherPreview3, teacherPreview4];
	const videoCards = videoCardsContent.map((video) => ({
		...video,
		previewSrc: reviewPreviews[(video.id - 1) % reviewPreviews.length]
	}));

	const desktopTextCards = textReviewsContent.slice(0, 6);
	const topText = desktopTextCards.slice(0, 2);
	const bottomText = desktopTextCards.slice(2);
	const mobileTextCards = textReviewsContent.slice(0, 7);
	const mobileRows = [mobileTextCards.slice(0, 3), mobileTextCards.slice(3)];
</script>

<section id="reviews" class="w-full py-[120px] lg:py-[240px]">
	<div class="mx-auto w-full max-w-[1720px] px-0 lg:px-6">
		<div class="mb-7 px-6 text-center max-[380px]:px-4 lg:mb-9 lg:px-0">
			<h2 class="text-[36px] font-bold tracking-tight text-white lg:text-[68px] lg:leading-[1.05]">
				Відгуки наших учнів
			</h2>
			<p
				class="mx-auto mt-1.5 max-w-[900px] text-[14px] text-white/90 lg:text-[24px] lg:leading-[1.2]"
			>
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

		<div class="mt-5 flex justify-center px-6 max-[380px]:px-4 lg:mt-6">
			<a
				href={reviewsInstagramUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-[60px] w-full max-w-[520px] items-center justify-center gap-3 rounded-[20px] border-t-[3px] border-white/35 bg-white/20 text-white transition-all hover:bg-white/30 active:scale-[0.98] lg:h-[78px]"
			>
				<img
					src={instagramIcon}
					alt="Instagram"
					class="h-6 w-6 lg:h-7 lg:w-7"
					loading="lazy"
					decoding="async"
				/>
				<span class="text-[18px] font-medium lg:text-[34px]">Більше відгуків</span>
			</a>
		</div>
	</div>
</section>
