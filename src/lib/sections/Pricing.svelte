<script lang="ts">
	const telegramIcon =
		'/assets/22015b1f4ccd427c4317d174a2e794704f4c3c45.svg';
	const sharkLogo = '/assets/659ace31cdc4361e4a37652be11d5bde52192458.svg';

	type Language = 'english' | 'polish';
	type Format = 'individual' | 'pair' | 'group';

	let selectedLanguage: Language = 'english';
	let selectedFormat: Format = 'individual';

	const plans = [
		{
			title: 'Пробне заняття',
			price: '300',
			perLesson: null,
			description: 'Познайомтесь із викладачем і методом навчання перед стартом курсу',
			cta: 'Хочу пробне заняття',
			popular: false,
			highlight: false
		},
		{
			title: '4 заняття',
			price: '2200',
			perLesson: '550 грн за урок',
			description: 'Ідеальний варіант, щоб спробувати формат і побачити перші результати',
			cta: 'Хочу 4 заняття',
			popular: false,
			highlight: false
		},
		{
			title: '8 занять',
			price: '4240',
			perLesson: '530 грн за урок',
			description: 'План для тих, хто хоче стабільно вдосконалювати англійську щотижня',
			cta: 'Хочу 8 занять',
			popular: true,
			highlight: true
		},
		{
			title: '12 занять',
			price: '6000',
			perLesson: '500 грн за урок',
			description: 'Найвигідніший пакет для системного навчання та помітного прогресу',
			cta: 'Хочу 12 занять',
			popular: false,
			highlight: false
		}
	];
</script>

<section id="pricing" class="w-full py-20 px-6">
	<!-- Header -->
	<div class="flex flex-col items-center gap-4 mb-10">
		<h2 class="section-title text-gradient-dark text-center max-w-[1066px]">
			Тарифи для кожного — обери свій
		</h2>
		<p class="section-subtitle text-center">
			Оберіть нижче мову та тип занять з простим ціноутворенням для своїх цілей
		</p>

		<!-- Filter tabs -->
		<div class="flex gap-4 mt-4 flex-wrap justify-center">
			<!-- Language selector -->
			<div class="bg-[#e9e9e9] flex items-center gap-2 p-2 rounded-[40px]">
				<button
					class="px-10 py-2.5 rounded-[68px] font-medium text-[24px] text-[#2a2a2a] leading-[1.2] transition-all"
					class:bg-white={selectedLanguage === 'english'}
					class:shadow-[0_3px_4px_0_rgba(0,0,0,0.15)]={selectedLanguage === 'english'}
					on:click={() => (selectedLanguage = 'english')}
				>
					Англійська
				</button>
				<button
					class="px-10 py-2.5 rounded-[68px] text-[24px] text-[#2a2a2a] leading-[1.2] transition-all"
					class:bg-white={selectedLanguage === 'polish'}
					class:shadow-[0_3px_4px_0_rgba(0,0,0,0.15)]={selectedLanguage === 'polish'}
					on:click={() => (selectedLanguage = 'polish')}
				>
					Польська
				</button>
			</div>

			<!-- Format selector -->
			<div class="bg-[#e9e9e9] flex items-center gap-2 p-2 rounded-[40px]">
				{#each [['individual', 'Індивідуальні'], ['pair', 'Парні'], ['group', 'Групові']] as [val, label]}
					<button
						class="px-10 py-2.5 rounded-[68px] text-[24px] text-[#2a2a2a] leading-[1.2] transition-all"
						class:bg-white={selectedFormat === val}
						class:font-medium={selectedFormat === val}
						class:shadow-[0_3px_4px_0_rgba(0,0,0,0.15)]={selectedFormat === val}
						on:click={() => (selectedFormat = val as Format)}
					>
						{label}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Pricing cards -->
	<div class="max-w-[1577px] mx-auto flex flex-col gap-7">
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
			{#each plans as plan}
				<div
					class="relative rounded-[36px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between pt-[30px] px-4 pb-4"
					class:bg-white={!plan.highlight}
					style={plan.highlight
						? 'background: linear-gradient(to bottom, #fde1e4 0%, white 40%)'
						: ''}
				>
					{#if plan.popular}
						<div class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
							<span
								class="font-caveat text-[#ef6a78] text-[62px] leading-none"
								style="font-family: 'Caveat', cursive; transform: rotate(5deg); display: block"
							>
								Популярно
							</span>
						</div>
					{/if}

					<div class="flex flex-col gap-3">
						<h3 class="font-medium text-[24px] text-[#2a2a2a] tracking-[-0.72px] leading-[1.15]">
							{plan.title}
						</h3>
						<div class="flex items-end gap-2.5">
							<span class="font-medium text-[50px] text-[#2a2a2a] tracking-[-1.5px] leading-[1.15]">
								{plan.price}
							</span>
							<span class="font-medium text-[22px] text-[#2a2a2a] tracking-[-0.65px] mb-1">грн</span>
						</div>
						{#if plan.perLesson}
							<p class="italic text-[18px] text-[#2a2a2a] leading-[1.2]">{plan.perLesson}</p>
						{/if}
						<hr class="border-[#e0e0e0]" />
						<p class="italic text-[20px] text-[#2a2a2a] leading-[1.2]">{plan.description}</p>
					</div>

					<button
						class="mt-6 h-[76px] w-full rounded-[20px] text-white font-medium text-[22px] leading-[1.5] transition-opacity hover:opacity-90 border-t-[3px] border-white/40"
						style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
					>
						{plan.cta}
					</button>
				</div>
			{/each}
		</div>

		<!-- Custom request card -->
		<div
			class="rounded-[48px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] p-8 flex flex-col lg:flex-row items-center justify-between gap-8"
			style="background: linear-gradient(to right, white, #def0ff)"
		>
			<div class="flex flex-col gap-5">
				<div class="flex items-center gap-4">
					<div class="w-[69px] h-[69px] bg-[#d1e9ff] rounded-[12px] overflow-hidden relative shrink-0">
						<img
							src={sharkLogo}
							alt=""
							class="absolute"
							style="width: 72px; height: 90px; top: 12px; left: -11px"
						/>
					</div>
					<h3
						class="font-medium text-[56px] leading-[1.2] tracking-[-2.24px]"
						style="background: linear-gradient(to bottom, #37a2ff 0%, #0450fb 60%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text"
					>
						Унікальний запит
					</h3>
				</div>
				<p class="text-[#515151] text-[18px] font-medium leading-[1.3] tracking-[-0.72px] max-w-[581px]">
					Особливі запити по вивченню мови (Професійний, корпоративний, бізнес, підготовка до
					конференцій, для команд) розраховуються індивідуально
				</p>
			</div>

			<a
				href="#contact"
				class="flex items-center gap-4 h-[73px] px-9 rounded-[20px] text-white font-medium text-[22px] shrink-0 transition-opacity hover:opacity-90 border-t-[3px] border-white/40"
				style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
			>
				<img src={telegramIcon} alt="" class="w-7 h-7" />
				Написати менеджеру
			</a>
		</div>
	</div>
</section>
