<script lang="ts">
	const quoteIcon = '/assets/3563e2117dab7f681113822ad03415cc6f32f0f3.svg';

	const teachers = [
		{
			name: 'Ірина',
			role: 'Засновниця школи, філологиня, учасниця програм обміну в США та Південній Кореї',
			lessons: '6000+',
			quote:
				'Sharks School — мій особистий проєкт, у якому я втілюю ідеї, що визрівали роками. Завдяки філологічній освіті та досвіду життя в США я добре розумію тих, хто наполегливо вчить іноземну мову',
			photo: '/assets/1603c080fb5a84b6b75fdf15581e29a942428a0a.webp',
			bg: '#cad3da'
		},
		{
			name: 'Маргарита',
			role: 'Викладач англійської мови, вчителька з великим досвідом роботи з різними рівнями',
			lessons: '4000+',
			quote:
				'Кожен учень — це окрема людина з унікальними інтересами та цілями. Моє завдання — зробити процес навчання цікавим та ефективним саме для вас',
			photo: '/assets/387625e651c06c4b363a29bd0507f919a99d52ff.webp',
			bg: '#868686'
		},
		{
			name: 'Марія',
			role: "Викладач англійської та польської мови, фахівець з комунікативної методики",
			lessons: '3500+',
			quote:
				'Навчання мові — це не просто граматика та словниковий запас, це спосіб мислення. Я допомагаю своїм учням думати іноземною мовою з першого заняття',
			photo: '/assets/0d1ae4569d8215cac01e8c1d8562d0c365cef24f.webp',
			bg: '#9b9b9b'
		},
		{
			name: 'Катерина',
			role: 'Досвідчений репетитор, спеціаліст з підготовки до іспитів IELTS та TOEFL',
			lessons: '5000+',
			quote:
				'Підготовка до міжнародних іспитів — це командна робота. Разом ми досягнемо того результату, який відкриє перед вами нові можливості',
			photo: '/assets/3b17562d5796cd0b2184a06aed9dd4927743fcd7.webp',
			bg: '#7a8f9b'
		}
	];

</script>

<section id="team" class="w-full py-20">
	<!-- Header -->
	<div class="flex flex-col items-center gap-4 mb-12 px-4">
		<div class="flex items-end justify-center gap-4">
			<h2 class="section-title text-gradient-dark">Наша</h2>
			<!-- Mini photo avatars -->
			<div class="flex items-center mb-2">
				{#each teachers.slice(0, 3) as teacher, i}
					<div
						class="w-[66px] h-[66px] rounded-full border-4 border-[#f5f5f5] overflow-hidden shrink-0"
						style="background: {teacher.bg}; margin-left: {i > 0 ? '-20px' : '0'}; z-index: {3 - i}"
					>
						<img
							src={teacher.photo}
							alt={teacher.name}
							class="w-full h-full object-cover"
						/>
					</div>
				{/each}
			</div>
			<h2 class="section-title text-gradient-dark">команда</h2>
		</div>
		<p class="section-subtitle text-center max-w-[781px]">
			Професіонали, які допоможуть полюбити мову та досягти мети
		</p>
	</div>

	<!-- Horizontal scroll cards -->
	<div class="overflow-x-auto scrollbar-hide pb-4">
		<div class="flex gap-6 px-6 lg:px-[calc((100vw-1280px)/2+24px)]" style="min-width: max-content">
			{#each teachers as teacher}
				<div class="w-[408px] h-[835px] relative rounded-[24px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] overflow-hidden shrink-0 flex flex-col">
					<!-- Photo area -->
					<div
						class="relative h-[473px] rounded-[24px] overflow-hidden shrink-0"
						style="background: {teacher.bg}"
					>
						<img
							src={teacher.photo}
							alt={teacher.name}
							class="absolute w-full h-full object-cover"
						/>
						<!-- Fade overlay at bottom -->
						<div
							class="absolute bottom-0 left-0 right-0 h-[166px]"
							style="background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #f5f5f5 100%); backdrop-filter: blur(7px)"
						></div>
						<!-- Lessons badge -->
						<div
							class="absolute top-[10px] right-[10px] h-[42px] w-[204px] rounded-[14px] overflow-hidden backdrop-blur-[15px] bg-white/80 border border-white"
						>
							<span class="absolute font-medium text-[#0450fb] text-[20px] leading-[1.3] left-[11px] top-[5px]">
								{teacher.lessons}
							</span>
							<span class="absolute text-[#0450fb] text-[14px] leading-none left-[73px] top-[14px]">
								Уроків проведено
							</span>
						</div>
					</div>

					<!-- Text area -->
					<div class="flex flex-col justify-between flex-1 p-5 pt-4 bg-[#f5f5f5]">
						<div class="flex flex-col gap-1">
							<h3 class="text-[40px] font-medium text-[#1e1e1e] leading-normal text-center">
								{teacher.name}
							</h3>
							<p class="text-[18px] font-medium text-[#1e1e1e] opacity-60 leading-[1.3] text-center">
								{teacher.role}
							</p>
						</div>
						<!-- Quote card -->
						<div
							class="relative rounded-[20px] px-3 pt-3 pb-6"
							style="background: linear-gradient(to bottom, rgba(222,230,253,0.3), #dee6fd)"
						>
							<p class="text-[#0450fb] text-[16px] font-medium leading-normal">
								{teacher.quote}
							</p>
							<div class="absolute -bottom-4 right-5 w-[46px] h-[40px]">
								<img src={quoteIcon} alt="" class="w-full h-full" />
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
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
</style>
