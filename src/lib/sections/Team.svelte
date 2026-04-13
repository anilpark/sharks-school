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
	import { onMount, tick } from 'svelte';

	const smallPhotos = [circleTeacher1, circleTeacher2, circleTeacher3];

	const teachers = [
		{
			name: 'Олена',
			role: 'Філологиня, викладач англійської та польської з сертифікатом CELTA',
			lessons: '4000+',
			quote:
				'Я вибудовую партнерські стосунки з учнями, інтегрую їхні інтереси в уроки й поєдную структурованість із дружньою атмосферою. Мій принцип — Guide, not intimidate. Поза уроками я творча й захоплююся фотографією.',
			photo: teacher3
		},
		{
			name: 'Катерина',
			role: 'Філологиня, викладачка англійської та організаторка книжкового клубу в Sharks School',
			lessons: '4000+',
			quote:
				'Маю досвід роботи зі студентами від 5 до 55 років. Я емпатична й організована, у вільний час вивчаю мови, читаю трилери та доглядаю свого песика Річі. Найбільше ціную студентів і взаємний обмін знаннями та досвідом',
			photo: teacher4
		},
		{
			name: 'Марго',
			role: 'Філологиня та перекладачка з освітою двох університетів у Польщі та Україні, викладачка польської та англійської',
			lessons: '3500+',
			quote:
				'Я працюю з гумором - якщо на уроці без сміху, значить щось пішло не так. Вірю, що жарт допомагає вчити граматику. Люблю щире спілкування й заохочую говорити багато. Обожнюю тварин і мрію про рудого песика для компанії на уроках з матчою',
			photo: teacher5
		},
		{
			name: 'Марічка',
			role: 'Викладач англійської мови з профільною педагогічною освітою та підтвердженим рівнем C1',
			lessons: '3500+',
			quote:
				'У своїй роботі я найбільше цінує щирі, вдячні посмішки студентів. Я вважаю себе "вічним студентом" і переконана, що саме завдяки цьому можна залишатися натхненним викладачем і передавати учням якісні знання разом із мотивацією вчитися',
			photo: teacher10
		},
		{
			name: 'Ірина',
			role: 'Засновниця школи, філологиня, учасниця програм обміну в США та Південній Кореї',
			lessons: '6000+',
			quote:
				'Sharks School — мій особистий проєкт, у якому я втілюю ідеї, що визрівали роками. Завдяки філологічній освіті та досвіду життя в США я добре розумію тих, хто наполегливо вчить іноземну мову, особливо опинившись за кордоном',
			photo: teacher1
		},
		{
			name: 'Маргарита',
			role: 'Філологиня, тім-лідерка команди',
			lessons: '5000+',
			quote:
				'Я люблю змістовні розмови, цікавлюся досвідом студентів і відкрито ділюся своїм. Слідкую за методичною якістю уроків усієї команди. Фанатка мемів, гумору, гір і активного відпочинку — від хайкінгу до параглайдингу',
			photo: teacher2
		},
		{
			name: 'Маргарита',
			role: 'Викладач англійської мови, вчителька з великим досвідом роботи з різними рівнями',
			lessons: '4000+',
			quote:
				'Кожен учень — це окрема людина з унікальними інтересами та цілями. Моє завдання — зробити процес навчання цікавим та ефективним саме для вас',
			photo: teacher6
		},
		{
			name: 'Марія',
			role: 'Викладач англійської та польської мови, фахівець з комунікативної методики',
			lessons: '3500+',
			quote:
				'Навчання мові — це не просто граматика та словниковий запас, це спосіб мислення. Я допомагаю своїм учням думати іноземною мовою з першого заняття',
			photo: teacher7
		},
		{
			name: 'Катерина',
			role: 'Досвідчений репетитор, спеціаліст з підготовки до іспитів IELTS та TOEFL',
			lessons: '5000+',
			quote:
				'Підготовка до міжнародних іспитів — це командна робота. Разом ми досягнемо того результату, який відкриє перед вами нові можливості',
			photo: teacher8
		},
		{
			name: 'Катерина',
			role: 'Досвідчений репетитор, спеціаліст з підготовки до іспитів IELTS та TOEFL',
			lessons: '5000+',
			quote:
				'Підготовка до міжнародних іспитів — це командна робота. Разом ми досягнемо того результату, який відкриє перед вами нові можливості',
			photo: teacher9
		}
	];

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

<section id="team" class="w-full py-20">
	<div class="mb-12 px-4 text-center">
		<div class="title-row">
			<h2 class="section-title text-gradient-dark">Наша</h2>

			<div class="avatars" aria-hidden="true">
				{#each smallPhotos as photo, i (i)}
					<div class="avatar" style={`z-index:${10 - i}`}>
						<img src={photo} alt="" />
					</div>
				{/each}
			</div>

			<h2 class="section-title text-gradient-dark">команда</h2>
		</div>

		<p class="section-subtitle mx-auto mt-4 max-w-[781px] text-center">
			Професіонали, які допоможуть полюбити мову та досягти мети
		</p>
	</div>

	<div class="slider-shell">
		<div class="teacher-slider scrollbar-hide" bind:this={slider}>
			<div class="teacher-track">
				{#each teachers as teacher, index (index + 100)}
					<div
						class="teacher-card relative flex h-[835px] h-auto shrink-0 flex-col overflow-hidden rounded-[24px]"
					>
						<div class="relative h-[473px] shrink-0 overflow-hidden">
							<img
								src={teacher.photo}
								alt={teacher.name}
								class="absolute h-full w-full object-cover"
							/>

							<div
								class="absolute right-0 bottom-0 left-0 h-[166px]"
								style="background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #f5f5f5 100%); backdrop-filter: blur(2px)"
							></div>

							<div
								class="absolute top-[10px] right-[10px] h-[42px] w-[204px] overflow-hidden rounded-[14px] border border-white bg-white/80 backdrop-blur-[15px]"
							>
								<span
									class="absolute top-[5px] left-[11px] text-[20px] leading-[1.3] font-medium text-[#0450fb]"
								>
									{teacher.lessons}
								</span>
								<span
									class="absolute top-[14px] left-[73px] text-[14px] leading-none text-[#0450fb]"
								>
									Уроків проведено
								</span>
							</div>
						</div>

						<div class="flex flex-1 flex-col bg-[#f5f5f5] p-5 pt-4">
							<div class="flex flex-col gap-1">
								<h3 class="text-center text-[36px] leading-normal font-medium text-[#1e1e1e]">
									{teacher.name}
								</h3>
								<p
									class="min-h-23 text-center text-[18px] leading-[1.3] font-medium text-[#1e1e1e] opacity-60"
								>
									{teacher.role}
								</p>
							</div>

							<div
								class="relative mt-2 rounded-[20px] px-3 pt-3 pb-6"
								style="background: linear-gradient(to bottom, rgba(222,230,253,0.3), #dee6fd)"
							>
								<p class="text-[16px] leading-normal font-medium text-[#0450fb]">
									{teacher.quote}
								</p>
								<div class="absolute right-5 -bottom-4 h-[40px] w-[46px]">
									<img src={quoteIcon} alt="" class="h-full w-full" />
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
		overflow-y: hidden;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		scroll-padding-inline: var(--edge-safe-space);
		padding-inline: var(--edge-safe-space);
		overscroll-behavior-x: contain;
	}

	.teacher-track {
		display: flex;
		gap: 16px;
		width: max-content;
	}

	.teacher-card {
		width: min(365px, calc(100vw - 32px));
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.slider-edge {
		position: absolute;
		top: 0;
		bottom: 0;
		width: var(--edge-safe-space);
		pointer-events: none;
		z-index: 5;
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
	}

	.slider-edge--left {
		left: 0;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f5f5f5 50%);
	}

	.slider-edge--right {
		right: 0;
		background: linear-gradient(
			270deg,
			rgba(245, 245, 245, 0.96) 0%,
			rgba(245, 245, 245, 0.72) 45%,
			rgba(245, 245, 245, 0) 100%
		);
	}

	@media (max-width: 768px) {
		.slider-shell {
			--edge-blur-width: 20px;
			--edge-gap: 12px;
		}

		.teacher-card {
			width: min(408px, calc(100vw - 24px));
		}
	}
</style>
