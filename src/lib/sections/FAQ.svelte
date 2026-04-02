<script lang="ts">
	const telegramIcon =
		'/assets/22015b1f4ccd427c4317d174a2e794704f4c3c45.svg';
	const plusIcon = '/assets/e7d82dad57d72f8afe12f13c91a3e9ac8aabe544.svg';

	const faqs = [
		{
			q: 'Як почати навчання з нами?',
			a: "Залиш заявку на сайті або напиши нам у Telegram/Instagram. Менеджер зв'яжеться з тобою, допоможе підібрати викладача та формат навчання, після чого ми записуємо тебе на пробне заняття."
		},
		{
			q: 'Чи можна скасувати або перенести заняття?',
			a: 'Так, заняття можна скасувати або перенести, попередивши викладача не пізніше ніж за 12 годин до початку. Якщо повідомлення прийде пізніше — заняття вважається проведеним.'
		},
		{
			q: 'Як проходить навчання?',
			a: 'Заняття проходять онлайн у зручний для тебе час. Ми використовуємо Google Meet або Zoom, а всі матеріали зберігаються в особистому кабінеті.'
		},
		{
			q: 'Скільки разів на тиждень я маю займатися, щоб отримати результат?',
			a: 'Рекомендуємо 2-3 заняття на тиждень для стабільного прогресу. Але навіть 1 заняття на тиждень у поєднанні з самостійним виконанням домашніх завдань дасть помітний результат.'
		},
		{
			q: 'А якщо я вирішив/ла взяти відпустку або паузу під час навчання?',
			a: 'Якщо ви плануєте взяти паузу у навчанні або вирушити у відпустку, будь ласка, повідомте про це свого викладача та адміністратора заздалегідь — щонайменше <strong class="text-[#0450fb]">за тиждень</strong> до запланованої дати призупинення занять. Ваше місце в розкладі викладача зберігається за вами без оплати протягом двох тижнів.\n\nВідпустку від занять можна брати 1 раз на 3 місяці.'
		},
		{
			q: 'Як проходить оплата?',
			a: 'Оплата здійснюється пакетами (4, 8 або 12 занять) через банківський переказ або онлайн-оплату. Після оплати ви отримуєте доступ до особистого кабінету.'
		},
		{
			q: 'Чи потрібно купувати якісь підручники чи воркбуки?',
			a: 'Ні, всі матеріали надає школа. Ми використовуємо власні розробки та автентичні ресурси.'
		}
	];

	let openIndex: number | null = 4; // FAQ 5 is open by default (shows answer)
</script>

<section id="faq" class="w-full py-20 px-6 relative overflow-hidden">
	<!-- Header -->
	<div class="flex flex-col items-center gap-4 mb-16 text-center max-w-[1149px] mx-auto">
		<h2 class="section-title text-gradient-dark">Поширені запитання</h2>
		<p class="section-subtitle max-w-[781px]">
			Основні запитання та принципи, які дадуть вам відповіді на поширені запитання
		</p>
	</div>

	<!-- FAQ accordion -->
	<div class="max-w-[1275px] mx-auto flex flex-col gap-3 mb-12">
		{#each faqs as faq, i}
			<div
				class="bg-white rounded-[24px] shadow-[0_2.8px_2.8px_0_rgba(0,0,0,0.05)] overflow-hidden"
			>
				<button
					class="w-full flex items-center justify-between p-6 text-left"
					on:click={() => (openIndex = openIndex === i ? null : i)}
				>
					<span class="font-medium text-[#1d1d1d] text-[24px] tracking-[-0.96px] leading-[1.2]">
						{i + 1}. {faq.q}
					</span>
					<div
						class="w-14 h-14 rounded-full border border-[#1d1d1d] flex items-center justify-center shrink-0 ml-4 transition-transform"
						class:rotate-45={openIndex === i}
					>
						<img src={plusIcon} alt="" class="w-6 h-6" />
					</div>
				</button>

				{#if openIndex === i}
					<div class="px-9 pb-6 border-t border-[rgba(16,16,16,0.1)]">
						<p class="font-medium text-[#616161] text-[18px] leading-[1.2] tracking-[-0.36px] pt-5 whitespace-pre-line">
							{@html faq.a}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- CTA card -->
	<div
		id="contact"
		class="max-w-[1280px] mx-auto bg-white rounded-[48px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] p-8 flex flex-col lg:flex-row items-center justify-between gap-8"
	>
		<p
			class="font-medium text-[48px] leading-[1.1] tracking-[-1.92px] max-w-[723px]"
		>
			<span class="text-[#4f4f4f]">Залиш свій запит — менеджер чекає на твоє </span>
			<span
				class="font-playfair font-bold italic"
				style="font-family: 'Playfair Display', serif; background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text"
			>
				повідомлення
			</span>
		</p>

		<a
			href="https://t.me/sharksschool"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-4 h-[73px] px-9 rounded-[20px] text-white font-medium text-[22px] shrink-0 transition-opacity hover:opacity-90 border-t-[3px] border-white/40"
			style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
		>
			<img src={telegramIcon} alt="" class="w-7 h-7" />
			Написати менеджеру
		</a>
	</div>
</section>
