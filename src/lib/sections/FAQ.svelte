<script lang="ts">
	import telegramIcon from '$lib/assets/telegram.svg';
	import plusIcon from '$lib/assets/plus-icon.svg';

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

<section id="faq" class="relative w-full overflow-hidden px-6 py-20">
	<!-- Header -->
	<div class="mx-auto mb-16 flex max-w-[1149px] flex-col items-center gap-4 text-center">
		<h2 class="section-title text-gradient-dark">Поширені запитання</h2>
		<p class="section-subtitle max-w-[781px]">
			Основні запитання та принципи, які дадуть вам відповіді на поширені запитання
		</p>
	</div>

	<!-- FAQ accordion -->
	<div class="mx-auto mb-12 flex max-w-[1275px] flex-col gap-3">
		{#each faqs as faq, i}
			<div
				class="overflow-hidden rounded-[24px] bg-white shadow-[0_2.8px_2.8px_0_rgba(0,0,0,0.05)]"
			>
				<button
					class="flex w-full items-center justify-between p-6 text-left"
					on:click={() => (openIndex = openIndex === i ? null : i)}
				>
					<span class="text-[24px] leading-[1.2] font-medium tracking-[-0.96px] text-[#1d1d1d]">
						{i + 1}. {faq.q}
					</span>
					<div
						class="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1d1d1d] transition-transform"
						class:rotate-45={openIndex === i}
					>
						<img src={plusIcon} alt="" class="h-6 w-6" />
					</div>
				</button>

				{#if openIndex === i}
					<div class="border-t border-[rgba(16,16,16,0.1)] px-9 pb-6">
						<p
							class="pt-5 text-[18px] leading-[1.2] font-medium tracking-[-0.36px] whitespace-pre-line text-[#616161]"
						>
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
		class="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 rounded-[48px] bg-white p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] lg:flex-row"
	>
		<p class="max-w-[723px] text-[48px] leading-[1.1] font-medium tracking-[-1.92px]">
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
			class="flex h-[73px] shrink-0 items-center gap-4 rounded-[20px] border-t-[3px] border-white/40 px-9 text-[22px] font-medium text-white transition-opacity hover:opacity-90"
			style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
		>
			<img src={telegramIcon} alt="" class="h-7 w-7" />
			Написати менеджеру
		</a>
	</div>
</section>
