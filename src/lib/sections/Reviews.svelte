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

		<!-- Mobile -->
		<div class="space-y-3 xl:hidden">
			<div
				class="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] max-[380px]:px-4 [&::-webkit-scrollbar]:hidden"
			>
				{#each videoCards as review (review.id)}
					<a
						href={review.videoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative h-[198px] w-[246px] shrink-0 snap-center rounded-[18px] bg-white p-2 text-left"
						aria-label={`Відкрити відео-відгук @${review.nickname}`}
					>
						<div class="relative h-full w-full overflow-hidden rounded-[12px] bg-[#d9d9d9]">
							<img
								src={review.previewSrc}
								alt={`Превʼю відео @${review.nickname}`}
								class="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
							<div
								class="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25"
							></div>
							<span class="absolute inset-0 flex items-center justify-center">
								<span
									class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										viewBox="0 0 24 24"
										class="h-7 w-7 translate-x-[1px]"
										fill="#0450fb"
										aria-hidden="true"
									>
										<path
											d="M7.5 4.8C6.4 4.1 5 4.9 5 6.2v11.6c0 1.3 1.4 2.1 2.5 1.4l9-5.8c1-.6 1-2.1 0-2.8l-9-5.8z"
										></path>
									</svg>
								</span>
							</span>
						</div>
						<div
							class="absolute top-3 right-3 flex h-[28px] items-center gap-1.5 rounded-[8px] border border-[#d1d1d1] bg-white/70 px-2 py-1 text-[12px] leading-[1.2] font-medium text-[#0450fb]"
						>
							<svg
								viewBox="0 0 24 24"
								class="h-[14px] w-[14px] shrink-0"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect>
								<circle cx="12" cy="12" r="4"></circle>
								<circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
							</svg>
							<span>@{review.nickname}</span>
						</div>
					</a>
				{/each}
			</div>

			{#each mobileRows as row, i (i)}
				<div
					class="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] max-[380px]:px-4 [&::-webkit-scrollbar]:hidden"
				>
					{#each row as review, index (review.id)}
						<div
							class="flex shrink-0 snap-center flex-col rounded-[12px] bg-white p-[9px_10px]"
							class:w-[252px]={index % 2 === 0}
							class:w-[228px]={index % 2 !== 0}
						>
							<div class="mb-1.5 flex items-center gap-2">
								<div
									class={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${review.avatarBg}`}
								>
									{review.avatarText}
								</div>
								<span class={`text-[10px] leading-[1.1] font-semibold ${review.nameColor}`}
									>{review.name}</span
								>
							</div>
							<p
								class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
							>
								{review.text}
							</p>
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<!-- Desktop -->
		<div class="hidden flex-col gap-[14px] xl:flex">
			<div class="flex items-stretch justify-center gap-[14px]">
				{#each videoCards.slice(0, 2) as video (video.id)}
					<a
						href={video.videoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative h-[309px] w-[373px] shrink-0 rounded-[20px] bg-white p-[14px] transition-transform active:scale-[0.98]"
						aria-label={`Відкрити відео-відгук @${video.nickname}`}
					>
						<div class="relative h-full w-full overflow-hidden rounded-[15px] bg-[#d9d9d9]">
							<img
								src={video.previewSrc}
								alt={`Превʼю відео @${video.nickname}`}
								class="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
							<div
								class="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25"
							></div>
							<span class="absolute inset-0 flex items-center justify-center">
								<span
									class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										viewBox="0 0 24 24"
										class="h-7 w-7 translate-x-[1px]"
										fill="#0450fb"
										aria-hidden="true"
									>
										<path
											d="M7.5 4.8C6.4 4.1 5 4.9 5 6.2v11.6c0 1.3 1.4 2.1 2.5 1.4l9-5.8c1-.6 1-2.1 0-2.8l-9-5.8z"
										></path>
									</svg>
								</span>
							</span>
						</div>
						<div
							class="absolute top-[20px] right-[20px] flex h-[42px] w-[159px] items-center gap-[5px] rounded-[10px] border border-[#d1d1d1] bg-white/65 px-3 py-2 text-[20px] leading-[1.3] font-medium text-[#0450fb]"
						>
							<svg
								viewBox="0 0 24 24"
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect>
								<circle cx="12" cy="12" r="4"></circle>
								<circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
							</svg>
							<span>@{video.nickname}</span>
						</div>
					</a>
				{/each}

				<div class="flex h-[309px] w-[392px] flex-col gap-[14px]">
					{#each topText.slice(0, 2) as review (review.id)}
						<div
							class="flex flex-col self-start overflow-hidden rounded-[14px] bg-white p-[15px_15px]"
							class:w-[392px]={review.id === 1}
							class:w-[326px]={review.id !== 1}
							class:flex-[1.15]={review.id === 1}
							class:flex-[0.85]={review.id !== 1}
						>
							<div class="flex items-start gap-2">
								<!-- аватар -->
								<div
									class={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${review.avatarBg}`}
								>
									{review.avatarText}
								</div>

								<!-- ім’я + текст -->
								<div class="flex flex-col gap-1">
									<span class={`text-[12px] leading-[1.1] font-semibold ${review.nameColor}`}>
										{review.name}
									</span>

									<p
										class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
									>
										{review.text}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex items-stretch justify-center gap-[14px]">
				<div class="flex h-[309px] w-[392px] flex-col gap-[14px]">
					<div
						class="flex w-[326px] flex-[0.85] flex-col self-end overflow-hidden rounded-[14px] bg-white p-[15px_15px]"
					>
						<div class="mb-1.5 flex items-start gap-2">
							<div
								class={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${bottomText[0].avatarBg}`}
							>
								{bottomText[0].avatarText}
							</div>
							<div class="flex flex-col gap-1">
								<span class={`text-[12px] leading-[1.1] font-semibold ${bottomText[0].nameColor}`}
									>{bottomText[0].name}</span
								>
								<p
									class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
								>
									{bottomText[0].text}
								</p>
							</div>
						</div>
					</div>

					<div
						class="flex w-[392px] flex-[1.15] flex-col overflow-hidden rounded-[14px] bg-white p-[15px_15px]"
					>
						<div class="mb-1.5 flex items-start gap-2">
							<div
								class={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${bottomText[1].avatarBg}`}
							>
								{bottomText[1].avatarText}
							</div>
							<div class="flex flex-col gap-1">
								<span class={`text-[12px] leading-[1.1] font-semibold ${bottomText[1].nameColor}`}
									>{bottomText[1].name}</span
								>
								<p
									class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
								>
									{bottomText[1].text}
								</p>
							</div>
						</div>
					</div>
				</div>

				{#each videoCards.slice(2) as video (video.id)}
					<a
						href={video.videoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative h-[309px] w-[373px] shrink-0 rounded-[21px] bg-white p-[14px] transition-transform active:scale-[0.98]"
						aria-label={`Відкрити відео-відгук @${video.nickname}`}
					>
						<div class="relative h-full w-full overflow-hidden rounded-[14px] bg-[#d9d9d9]">
							<img
								src={video.previewSrc}
								alt={`Превʼю відео @${video.nickname}`}
								class="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
							<div
								class="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25"
							></div>
							<span class="absolute inset-0 flex items-center justify-center">
								<span
									class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										viewBox="0 0 24 24"
										class="h-7 w-7 translate-x-[1px]"
										fill="#0450fb"
										aria-hidden="true"
									>
										<path
											d="M7.5 4.8C6.4 4.1 5 4.9 5 6.2v11.6c0 1.3 1.4 2.1 2.5 1.4l9-5.8c1-.6 1-2.1 0-2.8l-9-5.8z"
										></path>
									</svg>
								</span>
							</span>
						</div>
						<div
							class="absolute top-[20px] right-[20px] flex h-[42px] items-center gap-[5px] rounded-[10px] border border-[#d1d1d1] bg-white/65 px-3 py-2 text-[20px] font-medium text-[#0450fb]"
						>
							<svg
								viewBox="0 0 24 24"
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect>
								<circle cx="12" cy="12" r="4"></circle>
								<circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
							</svg>
							<span>@{video.nickname}</span>
						</div>
					</a>
				{/each}

				<div class="flex h-[309px] w-[392px] flex-col gap-[14px]">
					<div
						class="flex flex-[1.15] flex-col overflow-hidden rounded-[15px] bg-white p-[15px_15px]"
					>
						<div class="mb-1.5 flex items-start gap-2">
							<div
								class={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${bottomText[2].avatarBg}`}
							>
								{bottomText[2].avatarText}
							</div>
							<div class="flex flex-col gap-1">
								<span class={`text-[12px] leading-[1.1] font-semibold ${bottomText[2].nameColor}`}
									>{bottomText[2].name}</span
								>
								<p
									class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
								>
									{bottomText[2].text}
								</p>
							</div>
						</div>
					</div>

					<div
						class="flex w-[316px] flex-[0.85] flex-col overflow-hidden rounded-[14px] bg-white p-[15px_15px]"
					>
						<div class="mb-1.5 flex items-start gap-2">
							<div
								class={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${bottomText[3].avatarBg}`}
							>
								{bottomText[3].avatarText}
							</div>
							<div class="flex flex-col gap-1">
								<span class={`text-[12px] leading-[1.1] font-semibold ${bottomText[3].nameColor}`}
									>{bottomText[3].name}</span
								>
								<p
									class="text-[11px] leading-[1.15] [overflow-wrap:anywhere] break-words text-[#262626]"
								>
									{bottomText[3].text}
								</p>
							</div>
						</div>
					</div>
				</div>
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
